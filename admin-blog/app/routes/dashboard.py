from datetime import datetime
import os
from quart import Blueprint, redirect, render_template, request, session, url_for
import yaml
from pathlib import Path
from ..utils.status import get_user_status
from .. services.build_manager import build_manager
import asyncio
dashboard_bp = Blueprint('dashboard', __name__)

# Configuration
# Configuration
BLOG_DIR = Path('/mnt/NewVolume/git/Doc/Docs-QT-PyQt-PySide-Custom-Widgets/blog')
DRAFT_DIR = Path('/mnt/NewVolume/git/Doc/Docs-QT-PyQt-PySide-Custom-Widgets/blogs_draft')


# -----------------------------
# Blog operations
# -----------------------------
def parse_front_matter(content):
    """Parse YAML front matter from markdown content"""
    lines = content.split('\n')
    if lines and lines[0] == '---':
        front_matter_lines = []
        for line in lines[1:]:
            if line == '---':
                break
            front_matter_lines.append(line)
        try:
            front_matter = yaml.safe_load('\n'.join(front_matter_lines)) or {}
        except yaml.YAMLError:
            front_matter = {}
        body = '\n'.join(lines[len(front_matter_lines) + 2:])
        return front_matter, body
    return {}, content

def generate_blog_content(front_matter, body):
    """Generate markdown content with YAML front matter"""
    yaml_content = yaml.dump(front_matter, default_flow_style=False, allow_unicode=True)
    return f"---\n{yaml_content}---\n\n{body}"

async def get_blog_posts():
    """Get all blog posts from both published and draft directories"""
    posts = []
    
    # Ensure directories exist
    for directory in [BLOG_DIR, DRAFT_DIR]:
        if not directory.exists():
            directory.mkdir(parents=True, exist_ok=True)
    
    # Get published posts
    for file_path in BLOG_DIR.glob('*.md'):
        try:
            content = file_path.read_text(encoding='utf-8')
            front_matter, body = parse_front_matter(content)
            posts.append({
                'slug': file_path.stem,
                'filename': file_path.name,
                'title': front_matter.get('title', 'Untitled'),
                'date': front_matter.get('date', ''),
                'authors': front_matter.get('authors', []),
                'draft': False,  # Published posts are not drafts
                'tags': front_matter.get('tags', []),
                'content': body,
                'file_path': str(file_path)
            })
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            continue

    # Get draft posts
    for file_path in DRAFT_DIR.glob('*.md'):
        try:
            content = file_path.read_text(encoding='utf-8')
            front_matter, body = parse_front_matter(content)
            posts.append({
                'slug': file_path.stem,
                'filename': file_path.name,
                'title': front_matter.get('title', 'Untitled'),
                'date': front_matter.get('date', ''),
                'authors': front_matter.get('authors', []),
                'draft': True,  # Draft posts are drafts
                'tags': front_matter.get('tags', []),
                'content': body,
                'file_path': str(file_path)
            })
        except Exception as e:
            print(f"Error reading draft {file_path}: {e}")
            continue

    posts.sort(key=lambda x: x.get('date', ''), reverse=True)
    return posts


async def get_blog_post(slug):
    """Get a blog post by slug, checking both published and draft directories"""
    # Check published posts first
    file_path = BLOG_DIR / f"{slug}.md"
    if file_path.exists():
        content = file_path.read_text(encoding='utf-8')
        front_matter, body = parse_front_matter(content)
        return {
            'slug': slug,
            'filename': file_path.name,
            'title': front_matter.get('title', 'Untitled'),
            'date': front_matter.get('date', ''),
            'authors': front_matter.get('authors', []),
            'draft': False,
            'tags': front_matter.get('tags', []),
            'content': body,
            'file_path': str(file_path)
        }
    
    # Check draft posts
    file_path = DRAFT_DIR / f"{slug}.md"
    if file_path.exists():
        content = file_path.read_text(encoding='utf-8')
        front_matter, body = parse_front_matter(content)
        return {
            'slug': slug,
            'filename': file_path.name,
            'title': front_matter.get('title', 'Untitled'),
            'date': front_matter.get('date', ''),
            'authors': front_matter.get('authors', []),
            'draft': True,
            'tags': front_matter.get('tags', []),
            'content': body,
            'file_path': str(file_path)
        }
    
    return None

# -----------------------------
# Recent Activity Generation 
# -----------------------------
def generate_recent_activity(blog_posts):
    """Generate recent activity from blog posts"""
    activity = []
    
    for post in blog_posts[:5]:  # Last 5 posts
        post_date = datetime.strptime(post.get('date', ''), '%Y-%m-%d') if post.get('date') else datetime.now()
        time_diff = datetime.now() - post_date
        
        if time_diff.days == 0:
            time_ago = "Today"
        elif time_diff.days == 1:
            time_ago = "Yesterday"
        elif time_diff.days < 7:
            time_ago = f"{time_diff.days} days ago"
        elif time_diff.days < 30:
            time_ago = f"{time_diff.days // 7} weeks ago"
        else:
            time_ago = f"{time_diff.days // 30} months ago"
        
        if post.get('draft'):
            activity_type = 'draft'
            description = f"Draft created: {post['title']}"
        else:
            activity_type = 'published'
            description = f"Published: {post['title']}"
        
        activity.append({
            'type': activity_type,
            'title': 'Blog Post',
            'description': description,
            'time_ago': time_ago,
            'draft': post.get('draft', False),
            'date': post.get('date', '')
        })
    
    return activity

# -----------------------------
# Routes
# -----------------------------
@dashboard_bp.route('/')
@dashboard_bp.route('/dashboard')
async def dashboard_home():
    """Render the new modular dashboard"""
    blog_posts = await get_blog_posts()
    recent_activity = generate_recent_activity(blog_posts)

    # Count posts in each directory
    published_posts = [p for p in blog_posts if not p.get('draft')]
    draft_posts = [p for p in blog_posts if p.get('draft')]

    context = {
        'session': {'email': session.get('user', 'Guest')},
        'stats': {
            'total_posts': len(blog_posts),
            'published_posts': len(published_posts),
            'draft_posts': len(draft_posts),
        },
        'recent_posts': blog_posts[:5],
        'recent_activity': recent_activity,
        'current_time': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'current_year': datetime.now().year
    }

    return await render_template('dashboard/index.html', **context)


@dashboard_bp.route('/api/status')
async def api_status():
    """Provide live dashboard status (MQTT, balance, etc.)"""
    if 'user_id' not in session:
        return {'error': 'Not authenticated'}, 401

    status = await get_user_status(session['user_id'])
    return {
        "mqtt_status": status.get('mqtt_status', 'Disconnected'),
        "deriv_status": status.get('deriv_status', 'Disconnected'),
        "balance": status.get('balance', 0)
    }


@dashboard_bp.route('/blogs')
async def blog_list():
    posts = await get_blog_posts()
    context = {
        'session': {'email': session.get('user', 'Guest')},
        'posts': posts,
        'current_time': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'current_year': datetime.now().year
    }
    return await render_template('blog_list.html', **context)


@dashboard_bp.route('/blogs/create', methods=['GET', 'POST'])
async def blog_create():
    """Create new blog post"""
    if request.method == 'POST':
        form = await request.form
        
        # Get form data
        title = form.get('title')
        slug = form.get('slug')
        content = form.get('content')
        authors = [a.strip() for a in form.get('authors', '').split(',') if a.strip()]
        tags = [t.strip() for t in form.get('tags', '').split(',') if t.strip()]
        file_type = form.get('type', 'md')
        action = form.get('action', 'publish')  # 'draft' or 'publish'
        
        # Determine if it's a draft
        is_draft = action == 'draft'
        date = datetime.now().strftime('%Y-%m-%d')
        
        # Generate filename with date prefix (Docusaurus format)
        if not slug:
            slug = title.lower().replace(' ', '-')
            # Clean slug for URL safety
            slug = ''.join(c for c in slug if c.isalnum() or c == '-')
        
        filename = f"{date}-{slug}.{file_type}"
        
        # Create front matter (remove draft field for published posts)
        front_matter = {
            'title': title,
            'authors': authors,
            'tags': tags,
            'date': date,
            'slug': slug,
        }
        
        # Add draft field only for actual drafts
        if is_draft:
            front_matter['draft'] = True
        
        # Generate file content
        file_content = generate_blog_content(front_matter, content)
        
        # Save to appropriate directory
        if is_draft:
            save_path = DRAFT_DIR / filename
        else:
            save_path = BLOG_DIR / filename
        
        save_path.write_text(file_content, encoding='utf-8')
        
        return redirect(url_for('dashboard.blog_list'))

    return await render_template(
        'blog_create.html',
        session={'email': session.get('user', 'Guest')},
        post=None,
        current_time=datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        current_year=datetime.now().year
    )


@dashboard_bp.route('/blogs/edit/<slug>', methods=['GET', 'POST'])
async def blog_edit(slug):
    """Edit an existing blog post"""
    post = await get_blog_post(slug)
    if not post:
        return await render_template('404.html'), 404

    if request.method == 'POST':
        form = await request.form
        
        # Get form data
        title = form.get('title')
        new_slug = form.get('slug')
        content = form.get('content')
        authors = [a.strip() for a in form.get('authors', '').split(',') if a.strip()]
        tags = [t.strip() for t in form.get('tags', '').split(',') if t.strip()]
        file_type = form.get('type', 'md')
        action = form.get('action', 'publish')  # 'draft' or 'publish'
        
        # Determine if it's a draft
        is_draft = action == 'draft'
        date = post.get('date', datetime.now().strftime('%Y-%m-%d'))
        
        # Generate new filename with date prefix
        if not new_slug:
            new_slug = title.lower().replace(' ', '-')
            new_slug = ''.join(c for c in new_slug if c.isalnum() or c == '-')
        
        new_filename = f"{date}-{new_slug}.{file_type}"
        
        # Create updated front matter
        front_matter = {
            'title': title,
            'authors': authors,
            'tags': tags,
            'date': date,
            'slug': new_slug,
        }
        
        # Add draft field only for actual drafts
        if is_draft:
            front_matter['draft'] = True
        
        # Generate file content
        file_content = generate_blog_content(front_matter, content)
        
        # Determine save path based on new status
        if is_draft:
            new_save_path = DRAFT_DIR / new_filename
        else:
            new_save_path = BLOG_DIR / new_filename
        
        # If slug changed or status changed, remove old file
        old_file_path = Path(post['file_path'])
        if old_file_path.exists() and (new_slug != slug or is_draft != post['draft']):
            old_file_path.unlink()
        
        # Save to appropriate directory
        new_save_path.write_text(file_content, encoding='utf-8')
        
        return redirect(url_for('dashboard.blog_list'))

    # For GET request, use the same template as create but with post data
    return await render_template(
        'blog_create.html',  # Reuse the create form template
        session={'email': session.get('user', 'Guest')},
        post=post,  # Pass the post data to pre-fill the form
        current_time=datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        current_year=datetime.now().year
    )

@dashboard_bp.route('/blogs/publish/<slug>', methods=['POST'])
async def blog_publish(slug):
    """Move a draft to published posts and trigger build"""
    draft_path = DRAFT_DIR / f"{slug}.md"
    published_path = BLOG_DIR / f"{slug}.md"
    
    if not draft_path.exists():
        return await render_template('404.html'), 404
    
    try:
        # Read draft content
        content = draft_path.read_text(encoding='utf-8')
        front_matter, body = parse_front_matter(content)
        
        # Remove draft field from front matter
        if 'draft' in front_matter:
            del front_matter['draft']
        
        # Generate new content without draft field
        new_content = generate_blog_content(front_matter, body)
        
        # Save to published directory
        published_path.write_text(new_content, encoding='utf-8')
        
        # Remove from drafts
        draft_path.unlink()
        
        # Trigger Docusaurus build in background
        build_manager.start_build(trigger_source=f"publish:{slug}")
        
        return redirect(url_for('dashboard.blog_list'))
    
    except Exception as e:
        print(f"Error publishing {slug}: {e}")
        return await render_template('error.html', error=str(e)), 500

@dashboard_bp.route('/blogs/build-site', methods=['POST'])
async def build_site():
    """Manually trigger Docusaurus build"""
    result = build_manager.start_build(trigger_source="manual")
    return result

@dashboard_bp.route('/api/build-status')
async def build_status():
    """Get current build status"""
    return build_manager.get_build_status()

@dashboard_bp.route('/api/build-history')
async def build_history():
    """Get build history"""
    return {'history': build_manager.get_build_history()}


@dashboard_bp.route('/blogs/unpublish/<slug>', methods=['POST'])
async def blog_unpublish(slug):
    """Move a published post back to drafts"""
    published_path = BLOG_DIR / f"{slug}.md"
    draft_path = DRAFT_DIR / f"{slug}.md"
    
    if not published_path.exists():
        return await render_template('404.html'), 404
    
    try:
        # Read published content
        content = published_path.read_text(encoding='utf-8')
        front_matter, body = parse_front_matter(content)
        
        # Add draft field to front matter
        front_matter['draft'] = True
        
        # Generate new content with draft field
        new_content = generate_blog_content(front_matter, body)
        
        # Save to draft directory
        draft_path.write_text(new_content, encoding='utf-8')
        
        # Remove from published
        published_path.unlink()
        
        return redirect(url_for('dashboard.blog_list'))
    
    except Exception as e:
        print(f"Error unpublishing {slug}: {e}")
        return await render_template('error.html', error=str(e)), 500
    
@dashboard_bp.route('/blogs/delete/<slug>', methods=['POST'])
async def blog_delete(slug):
    """Delete a blog post (both draft and published)"""
    post = await get_blog_post(slug)
    if not post:
        return await render_template('404.html'), 404
    
    try:
        # Delete the file from its current location
        file_path = Path(post['file_path'])
        if file_path.exists():
            file_path.unlink()
        
        return redirect(url_for('dashboard.blog_list'))
    
    except Exception as e:
        print(f"Error deleting {slug}: {e}")
        return await render_template('error.html', error=str(e)), 500