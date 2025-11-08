#!/usr/bin/env python3
import os
import subprocess
import sys
import json
from pathlib import Path
from datetime import datetime

def build_docusaurus_site():
    """Build Docusaurus site only for published blogs"""
    
    # Path to your Docusaurus project
    docu_path = Path('/mnt/NewVolume/git/Doc/Docs-QT-PyQt-PySide-Custom-Widgets')
    
    # Create build logs directory
    logs_dir = Path(__file__).parent / 'build_logs'
    logs_dir.mkdir(exist_ok=True)
    
    log_file = logs_dir / f'build_{datetime.now().strftime("%Y%m%d_%H%M%S")}.log'
    
    # Check if there are any published blogs
    blog_dir = docu_path / 'blog'
    blog_count = len(list(blog_dir.glob('*.md'))) if blog_dir.exists() else 0
    
    with open(log_file, 'w') as f:
        f.write(f"Build started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Published blogs found: {blog_count}\n")
        
        if blog_count == 0:
            f.write("No published blogs found. Skipping build.\n")
            return {'status': 'skipped', 'message': 'No published blogs', 'log_file': str(log_file)}
        
        f.write(f"Building Docusaurus site with {blog_count} published blogs...\n")
        
        try:
            # Change to Docusaurus directory
            os.chdir(docu_path)
            
            # Run Docusaurus build
            env = os.environ.copy()
            env['PATH'] = '/usr/local/bin:/usr/bin:/home/spinn/.nvm/versions/node/v18.20.2/bin:' + env['PATH']

            result = subprocess.run(
                ['npm', 'run', 'build'],
                capture_output=True,
                text=True,
                timeout=300,
                env=env
            )

            
            f.write("Build process completed\n")
            f.write(f"Return code: {result.returncode}\n")
            
            if result.returncode == 0:
                f.write("✅ Docusaurus build successful!\n")
                return {
                    'status': 'success', 
                    'message': f'Built {blog_count} blogs successfully',
                    'log_file': str(log_file)
                }
            else:
                f.write("❌ Docusaurus build failed!\n")
                f.write("STDERR:\n" + result.stderr + "\n")
                f.write("STDOUT:\n" + result.stdout + "\n")
                return {
                    'status': 'error', 
                    'message': 'Build process failed',
                    'log_file': str(log_file),
                    'error': result.stderr
                }
                
        except subprocess.TimeoutExpired:
            f.write("❌ Build timed out after 5 minutes\n")
            return {
                'status': 'error', 
                'message': 'Build timed out',
                'log_file': str(log_file)
            }
        except Exception as e:
            f.write(f"❌ Error during build: {e}\n")
            return {
                'status': 'error', 
                'message': str(e),
                'log_file': str(log_file)
            }

if __name__ == "__main__":
    result = build_docusaurus_site()
    print(json.dumps(result))