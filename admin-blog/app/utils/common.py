import bcrypt
import secrets
from datetime import datetime, timedelta
from itsdangerous import URLSafeTimedSerializer
from quart import current_app

# Password Utilities
def hash_password(password: str) -> str:
    """Securely hash a password using bcrypt."""
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    """Verify a password against its hash."""
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

# CSRF Protection
def generate_csrf_token() -> str:
    """Generate a cryptographically secure CSRF token."""
    return secrets.token_urlsafe(32)

def validate_csrf_token(token: str, max_age: int = 3600) -> bool:
    """Validate a CSRF token with time-based expiration."""
    serializer = URLSafeTimedSerializer(current_app.secret_key)
    try:
        serializer.loads(token, max_age=max_age)
        return True
    except:
        return False

# Session Utilities
def is_session_valid(session_data: dict) -> bool:
    """Check if a session hasn't expired."""
    last_active = session_data.get('last_active')
    if not last_active:
        return False
    return datetime.now() - last_active < timedelta(minutes=30)
