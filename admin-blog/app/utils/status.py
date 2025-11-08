import asyncio
import logging
from . session_manager import active_sessions

logger = logging.getLogger(__name__)

my_sio = None

async def get_user_status(user_id: str, wrapper=None) -> dict:
    status = {
        
    }

    return status

async def format_status(status, user_id):
    return {
        
    }

async def notify_sessions(user_id, event, data):
    if my_sio is None:
        logger.error("[notify_sessions] Socket.IO instance (my_sio) is not set. Cannot emit.")
        return 0
    user_id = str(user_id)

    if user_id not in active_sessions:
        logger.warning(f"[notify_sessions] No active sessions for user {user_id}")
        return 0

    successful = 0
    total_sessions = len(active_sessions[user_id])
    logger.debug(f"[notify_sessions] Found {total_sessions} active session(s) for user {user_id}")

    # Modified session iteration
    for session_id, session_data in active_sessions[user_id].items():
        # Ensure session_data is a dictionary
        if isinstance(session_data, str):
            logger.warning(f"Session data is string, converting to dict: {session_data}")
            session_data = {'socket_id': session_data}
        
        socket_id = session_data.get('socket_id')
        if not socket_id:
            logger.debug(f"[notify_sessions] Session {session_id} has no socket_id, skipping")
            continue

        try:
            await my_sio.emit(event, data, room=socket_id)
            successful += 1
            logger.debug(f"[notify_sessions] Emitted event '{event}' to session {session_id} (socket_id={socket_id})")
        except Exception as e:
            logger.error(f"[notify_sessions] Error emitting to session {session_id} (socket_id={socket_id}): {e}")

    return successful


def set_sio_instance(sio_instance):
    global my_sio
    my_sio = sio_instance
    logger.debug(f"Socket.IO instance set: {my_sio}")
    return my_sio

