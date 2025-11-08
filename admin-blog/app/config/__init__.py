import os
from datetime import timedelta
from itsdangerous import URLSafeTimedSerializer

def configure_app(app):
    app.secret_key = os.getenv("SECRET_KEY", os.urandom(24).hex())
    app.permanent_session_lifetime = timedelta(minutes=30)
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    
    # Security configurations
    app.config['PREFERRED_URL_SCHEME'] = 'https'
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
    
    # If behind proxy
    app.config['PROXY_REAL_IP'] = True  # Trust X-Forwarded-* headers
    app.config['FORWARDED_SECRET'] = os.getenv('FORWARDED_SECRET', 'SECRET_KEY')
    
    return URLSafeTimedSerializer(app.secret_key)