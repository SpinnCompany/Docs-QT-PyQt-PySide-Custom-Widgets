from .. models import async_session, User, engine, Base
import asyncio
from .. utils.session_manager import cleanup_stale_sessions
async def initialize_database():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

        await conn.exec_driver_sql("""
            CREATE TABLE IF NOT EXISTS user_settings (
                user_id INTEGER PRIMARY KEY,
                settings TEXT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        """)

    asyncio.create_task(cleanup_stale_sessions())
