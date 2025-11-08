from functools import wraps
from quart import request, redirect, current_app
from .auth import auth_bp
from .dashboard import dashboard_bp

def https_required(func):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        # Skip HTTPS check in development
        if not current_app.debug:
            # Check X-Forwarded-Proto if behind reverse proxy
            forwarded_proto = request.headers.get('X-Forwarded-Proto', 'http')
            if forwarded_proto != 'https':
                if request.url.startswith('http://'):
                    https_url = request.url.replace('http://', 'https://', 1)
                    return redirect(https_url, code=301)
                return "HTTPS required", 403
        return await func(*args, **kwargs)
    return wrapper

def register_routes(app, sio):
    # Apply HTTPS requirement to all blueprints
    for bp in [auth_bp, dashboard_bp ]:
        # Create a copy of the view functions dict items
        view_functions = list(bp.view_functions.items())
        
        # Clear existing view functions
        bp.view_functions.clear()
        
        # Re-register each view function with HTTPS requirement
        for endpoint, view_func in view_functions:
            bp.route(endpoint)(https_required(view_func))
        
        app.register_blueprint(bp)