from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Text  
import os

DATABASE_URL = "sqlite+aiosqlite:///app/data/database/autobot_users.db"

# Ensure directory exists before creating the engine
db_path = DATABASE_URL.replace("sqlite+aiosqlite:///", "")
db_dir = os.path.dirname(db_path)
os.makedirs(db_dir, exist_ok=True)

def create_async_db_engine(database_url: str, echo: bool = False):
    """Create and return an async SQLAlchemy database engine.

    Args:
        database_url (str): Database connection URL in SQLAlchemy format.
        echo (bool, optional): If True, engine will log all SQL statements.
                             Defaults to False.

    Returns:
        AsyncEngine: SQLAlchemy async engine instance.
    """
    return create_async_engine(database_url, echo=echo)

engine = create_async_db_engine(DATABASE_URL, echo=False)

def create_async_sessionmaker(engine):
    """Create and return an async sessionmaker configured for the given engine.

    Args:
        engine: SQLAlchemy async engine instance.

    Returns:
        sessionmaker: Configured async session factory.
    """
    return sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

async_session = create_async_sessionmaker(engine)

Base = declarative_base()

class User(Base):
    """SQLAlchemy model representing a user in the autobot system.

    Attributes:
        id (int): Primary key, auto-incremented user ID.
        email (str): Unique email address used for authentication.
        password_hash (str): Hashed password for local accounts (nullable for social accounts).
        is_social_account (bool): Flag indicating if this is a social media account.
    """
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, doc="Primary key, auto-incremented user ID")
    email = Column(String, unique=True, nullable=False, doc="Unique email address used for authentication")
    password_hash = Column(String, doc="Hashed password for local accounts (nullable for social accounts)")
    is_social_account = Column(Boolean, default=False,
                             doc="Flag indicating if this is a social media account")

    def __repr__(self):
        """Official string representation of the User object."""
        return f"<User(id={self.id}, email='{self.email}', is_social={self.is_social_account})>"

class UserSettings(Base):
    """Stores user trading settings"""
    __tablename__ = 'user_settings'

    user_id = Column(Integer, ForeignKey('users.id', ondelete="CASCADE"), primary_key=True)
    settings = Column(Text, nullable=False, doc="JSON-encoded user settings")

    def __repr__(self):
        return f"<UserSettings(user_id={self.user_id})>"
