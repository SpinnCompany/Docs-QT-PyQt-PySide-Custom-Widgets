from .user import async_session, engine, Base, User, UserSettings
import asyncio
from ..utils.session_manager import cleanup_stale_sessions

__all__ = ['async_session', 'engine', 'Base', 'User', 'UserSettings']

async def initialize_database():
    """Initialize the database schema"""
    async with engine.begin() as conn:
        # Create all tables defined by SQLAlchemy models
        await conn.run_sync(Base.metadata.create_all)
    
    # Start background tasks
    asyncio.create_task(cleanup_stale_sessions())