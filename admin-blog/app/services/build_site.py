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
    docu_path = Path('/mnt/NewVolume/git/SpinnCompany/Docs-QT-PyQt-PySide-Custom-Widgets')
    
    # Create build logs directory
    logs_dir = Path(__file__).parent / 'build_logs'
    logs_dir.mkdir(exist_ok=True)
    
    log_file = logs_dir / f'build_{datetime.now().strftime("%Y%m%d_%H%M%S")}.log'
    
    # Check if there are any published blogs (both .md and .mdx)
    blog_dir = docu_path / 'blog'
    supported_extensions = {'.md', '.mdx'}
    
    blog_count = 0
    if blog_dir.exists():
        for file_path in blog_dir.iterdir():
            if file_path.suffix.lower() in supported_extensions:
                blog_count += 1
    
    with open(log_file, 'w') as f:
        f.write(f"Build started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Published blogs found: {blog_count}\n")
        
        # Count by file type for detailed logging
        if blog_dir.exists():
            md_count = len(list(blog_dir.glob('*.md')))
            mdx_count = len(list(blog_dir.glob('*.mdx')))
            f.write(f"  - Markdown (.md) files: {md_count}\n")
            f.write(f"  - MDX (.mdx) files: {mdx_count}\n")
        
        if blog_count == 0:
            f.write("No published blogs found. Skipping build.\n")
            return {
                'status': 'skipped', 
                'message': 'No published blogs', 
                'log_file': str(log_file),
                'blog_count': 0
            }
        
        f.write(f"Building Docusaurus site with {blog_count} published blogs...\n")
        
        try:
            # Change to Docusaurus directory
            os.chdir(docu_path)
            
            # Set up environment with Node.js path
            env = os.environ.copy()
            node_path = '/home/spinn/.nvm/versions/node/v18.20.2/bin'
            env['PATH'] = f"{node_path}:/usr/local/bin:/usr/bin:/bin:" + env['PATH']

            # Optional: Add environment variables for build information
            env['BLOG_COUNT'] = str(blog_count)
            env['BUILD_TIMESTAMP'] = datetime.now().isoformat()

            f.write(f"Current directory: {os.getcwd()}\n")
            f.write(f"Node path: {node_path}\n")
            
            # Check if npm is available by trying to run it
            try:
                npm_version = subprocess.run(
                    ['npm', '--version'], 
                    capture_output=True, 
                    text=True, 
                    env=env,
                    timeout=10
                )
                if npm_version.returncode == 0:
                    f.write(f"npm version: {npm_version.stdout.strip()}\n")
                else:
                    f.write(f"❌ npm check failed: {npm_version.stderr}\n")
                    return {
                        'status': 'error', 
                        'message': 'npm not available',
                        'log_file': str(log_file),
                        'error': npm_version.stderr
                    }
            except Exception as e:
                f.write(f"❌ Error checking npm: {e}\n")
                return {
                    'status': 'error', 
                    'message': f'npm check failed: {e}',
                    'log_file': str(log_file)
                }
            
            # Check if node is available
            try:
                node_version = subprocess.run(
                    ['node', '--version'], 
                    capture_output=True, 
                    text=True, 
                    env=env,
                    timeout=10
                )
                if node_version.returncode == 0:
                    f.write(f"node version: {node_version.stdout.strip()}\n")
                else:
                    f.write(f"❌ node check failed: {node_version.stderr}\n")
                    return {
                        'status': 'error', 
                        'message': 'node not available',
                        'log_file': str(log_file),
                        'error': node_version.stderr
                    }
            except Exception as e:
                f.write(f"❌ Error checking node: {e}\n")
                return {
                    'status': 'error', 
                    'message': f'node check failed: {e}',
                    'log_file': str(log_file)
                }
            
            f.write("Starting Docusaurus build...\n")
            
            # Run the build with longer timeout
            result = subprocess.run(
                ['npm', 'run', 'build'],
                capture_output=True,
                text=True,
                timeout=600,  # 10 minutes timeout
                env=env
            )

            f.write("Build process completed\n")
            f.write(f"Return code: {result.returncode}\n")
            
            if result.returncode == 0:
                f.write("✅ Docusaurus build successful!\n")
                f.write(f"✅ Successfully built {blog_count} blog posts\n")
                
                # Optional: Check if build output exists
                build_dir = docu_path / 'build'
                if build_dir.exists():
                    f.write(f"✅ Build output created at: {build_dir}\n")
                
                return {
                    'status': 'success', 
                    'message': f'Built {blog_count} blogs successfully',
                    'log_file': str(log_file),
                    'blog_count': blog_count,
                    'timestamp': datetime.now().isoformat()
                }
            else:
                f.write("❌ Docusaurus build failed!\n")
                f.write("STDERR:\n" + result.stderr + "\n")
                f.write("STDOUT:\n" + result.stdout + "\n")
                return {
                    'status': 'error', 
                    'message': 'Build process failed',
                    'log_file': str(log_file),
                    'error': result.stderr,
                    'blog_count': blog_count,
                    'returncode': result.returncode
                }
                
        except subprocess.TimeoutExpired:
            f.write("❌ Build timed out after 10 minutes\n")
            return {
                'status': 'error', 
                'message': 'Build timed out',
                'log_file': str(log_file),
                'blog_count': blog_count
            }
        except Exception as e:
            f.write(f"❌ Error during build: {e}\n")
            import traceback
            f.write(f"Traceback: {traceback.format_exc()}\n")
            return {
                'status': 'error', 
                'message': str(e),
                'log_file': str(log_file),
                'blog_count': blog_count,
                'traceback': traceback.format_exc()
            }

def check_direct_access():
    """Check if we can directly access npm and node without which"""
    print("Checking direct access to npm and node...")
    
    # Try to run npm directly
    try:
        result = subprocess.run(['npm', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✅ npm accessible directly: {result.stdout.strip()}")
        else:
            print(f"❌ npm not accessible: {result.stderr}")
    except Exception as e:
        print(f"❌ Cannot run npm directly: {e}")
    
    # Try to run node directly
    try:
        result = subprocess.run(['node', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✅ node accessible directly: {result.stdout.strip()}")
        else:
            print(f"❌ node not accessible: {result.stderr}")
    except Exception as e:
        print(f"❌ Cannot run node directly: {e}")

def check_docusaurus_setup():
    """Check if Docusaurus is properly set up and can handle MDX files"""
    docu_path = Path('/mnt/NewVolume/git/SpinnCompany/Docs-QT-PyQt-PySide-Custom-Widgets')
    
    print("Checking Docusaurus setup for MDX support...")
    
    # Check if docusaurus.config.js exists
    config_file = docu_path / 'docusaurus.config.js'
    if not config_file.exists():
        print("❌ docusaurus.config.js not found")
        return False
    
    # Check package.json for MDX related dependencies
    package_file = docu_path / 'package.json'
    if package_file.exists():
        try:
            with open(package_file, 'r') as f:
                package_data = json.load(f)
            
            dependencies = package_data.get('dependencies', {})
            dev_dependencies = package_data.get('devDependencies', {})
            
            all_deps = {**dependencies, **dev_dependencies}
            
            # Check for common MDX related packages
            mdx_packages = ['@mdx-js/react', '@mdx-js/loader', '@docusaurus/mdx-loader']
            found_packages = [pkg for pkg in mdx_packages if pkg in all_deps]
            
            if found_packages:
                print(f"✅ Found MDX packages: {', '.join(found_packages)}")
            else:
                print("⚠️  No MDX-specific packages found (MDX might be included in Docusaurus core)")
            
        except json.JSONDecodeError:
            print("❌ Could not parse package.json")
            return False
    
    # Check if MDX files are present in blog directory
    blog_dir = docu_path / 'blog'
    if blog_dir.exists():
        mdx_files = list(blog_dir.glob('*.mdx'))
        md_files = list(blog_dir.glob('*.md'))
        
        print(f"📊 Blog file statistics:")
        print(f"   - Markdown (.md) files: {len(md_files)}")
        print(f"   - MDX (.mdx) files: {len(mdx_files)}")
        
        if mdx_files:
            print("✅ MDX files detected in blog directory")
    
    return True

if __name__ == "__main__":
    # If --check-access flag is provided, run access check
    if '--check-access' in sys.argv:
        check_direct_access()
        sys.exit(0)
    
    # If --check-setup flag is provided, run setup check instead of build
    if '--check-setup' in sys.argv:
        check_docusaurus_setup()
        sys.exit(0)
    
    # Run the build
    result = build_docusaurus_site()
    print(json.dumps(result, indent=2))