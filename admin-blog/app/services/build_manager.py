import threading
import subprocess
import sys
import json
import time
from pathlib import Path
from datetime import datetime
from enum import Enum

class BuildStatus(Enum):
    PENDING = "pending"
    BUILDING = "building"
    SUCCESS = "success"
    ERROR = "error"
    SKIPPED = "skipped"

class BuildManager:
    def __init__(self):
        self.current_build = None
        self.build_history = []
        self.max_history = 10
        
    def start_build(self, trigger_source="manual"):
        """Start a new build in a non-blocking thread"""
        if self.current_build and self.current_build.is_alive():
            return {
                'status': 'error',
                'message': 'Build already in progress'
            }
        
        # Start build in background thread
        self.current_build = threading.Thread(
            target=self._run_build_process,
            args=(trigger_source,),
            daemon=True
        )
        self.current_build.start()
        
        return {
            'status': 'started',
            'message': 'Build started in background'
        }
    
    def _run_build_process(self, trigger_source):
        """Run the build process and capture results"""
        build_id = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        build_info = {
            'id': build_id,
            'status': BuildStatus.BUILDING.value,
            'start_time': datetime.now().isoformat(),
            'trigger_source': trigger_source,
            'log_file': None,
            'message': None,
            'end_time': None,
            'duration': None
        }
        
        try:
            # Run the build script
            build_script = Path(__file__).parent / 'build_site.py'
            result = subprocess.run(
                [sys.executable, str(build_script)],
                capture_output=True,
                text=True,
                timeout=300  # 5 minute timeout
            )
            
            # Parse result
            if result.returncode == 0:
                build_result = json.loads(result.stdout)
            else:
                build_result = {
                    'status': 'error',
                    'message': 'Build script failed to execute',
                    'error': result.stderr
                }
                
        except subprocess.TimeoutExpired:
            build_result = {
                'status': 'error',
                'message': 'Build timed out'
            }
        except json.JSONDecodeError:
            build_result = {
                'status': 'error', 
                'message': 'Invalid build output',
                'error': result.stderr if result else 'No output'
            }
        except Exception as e:
            build_result = {
                'status': 'error',
                'message': f'Build process error: {str(e)}'
            }
        
        # Update build info
        build_info.update(build_result)
        build_info['end_time'] = datetime.now().isoformat()
        
        # Calculate duration
        start = datetime.fromisoformat(build_info['start_time'])
        end = datetime.fromisoformat(build_info['end_time'])
        build_info['duration'] = str(end - start)
        
        # Add to history
        self.build_history.insert(0, build_info)
        if len(self.build_history) > self.max_history:
            self.build_history = self.build_history[:self.max_history]
    
    def get_build_status(self):
        """Get current build status"""
        if not self.current_build:
            return {
                'status': 'idle',
                'message': 'No build in progress'
            }
        
        if self.current_build.is_alive():
            return {
                'status': 'building',
                'message': 'Build in progress...'
            }
        
        # Get the latest completed build
        if self.build_history and self.build_history[0]['end_time']:
            latest_build = self.build_history[0]
            return {
                'status': latest_build['status'],
                'message': latest_build.get('message', 'Build completed'),
                'log_file': latest_build.get('log_file'),
                'duration': latest_build.get('duration'),
                'trigger_source': latest_build.get('trigger_source')
            }
        
        return {
            'status': 'unknown',
            'message': 'Build status unknown'
        }
    
    def get_build_history(self):
        """Get build history"""
        return self.build_history

# Global build manager instance
build_manager = BuildManager()