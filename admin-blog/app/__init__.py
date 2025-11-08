import asyncio
import os
import sys
import logging
from datetime import timedelta  # Add this import
from hypercorn.asyncio import serve
from hypercorn.config import Config
from quart import Quart, current_app
from quart_cors import cors
from socketio import AsyncServer, ASGIApp
from dotenv import load_dotenv

from app.utils.status import set_sio_instance
from .config import configure_app
from .routes import register_routes
from .database import initialize_database
from .auth.oauth import configure_oauth
from .utils.socket_handlers import register_socket_handlers

# Load environment variables
load_dotenv()

# Initialize Quart app
app = Quart(__name__)
app.config['PREFERRED_URL_SCHEME'] = 'https'  # Force HTTPS URLs

# Configure session settings BEFORE configure_app()
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=30)  # 30 days
app.config['SESSION_REFRESH_EACH_REQUEST'] = True  # Extend session on each request
app.config['SESSION_COOKIE_HTTPONLY'] = True  # Security: prevent JS access
# app.config['SESSION_COOKIE_SECURE'] = os.environ.get('FLASK_ENV') != 'development'  # HTTPS in production
app.config['SESSION_COOKIE_SECURE'] = True 

# Configure app settings
configure_app(app)

# Initialize OAuth before routes
configure_oauth(app)

# Initialize Socket.IO
sio = AsyncServer(
    async_mode='asgi',
    cors_allowed_origins='*',
    path='/socket.io',
    logger=True,
)
sio_app = ASGIApp(sio, app)

# Register Socket.IO with the app
app.my_sio = sio

set_sio_instance(sio)

# Register routes
register_routes(app, sio)

# Register Socket.IO handlers
register_socket_handlers(sio)

# Initialize database
@app.before_serving
async def startup():
    current_app.sio = sio
    await initialize_database()
