import asyncio
from datetime import datetime
from uuid import uuid4
from collections import defaultdict
import logging
from quart import session

logger = logging.getLogger(__name__)

active_sessions = defaultdict(dict)

async def cleanup_stale_sessions():
    """Periodically clean up inactive sessions"""
    while True:
        try:
            now = datetime.now()
            for user_id, sessions in list(active_sessions.items()):
                for session_id, session_data in list(sessions.items()):
                    if not isinstance(session_data, dict):
                        del active_sessions[user_id][session_id]
                        continue
                        
                    if (now - session_data['last_active']).total_seconds() > 3600:
                        del active_sessions[user_id][session_id]
                        logger.info(f"Cleaned up stale session {session_id} for user {user_id}")
                        
                # Remove user if no sessions left
                if not active_sessions[user_id]:
                    del active_sessions[user_id]
                    
        except Exception as e:
            logger.error(f"Error cleaning up sessions: {e}", exc_info=True)
        await asyncio.sleep(3600)  # Run hourly

def get_user_sessions(user_id):
    """Get all valid sessions for a user"""
    validate_user_sessions(user_id)
    return active_sessions.get(user_id, {})

def validate_user_sessions(user_id):
    """Ensure clean session structure for a user"""
    if user_id not in active_sessions:
        return
        
    # Remove any invalid entries
    to_delete = [k for k, v in active_sessions[user_id].items() 
                if k == 'socket_id' or not isinstance(v, dict)]
                
    for key in to_delete:
        logger.warning(f"Removing invalid session entry: {key}")
        del active_sessions[user_id][key]

async def track_http_session():
    """Track HTTP session and link with WebSocket if available"""
    if 'user_id' not in session:
        return
        
    user_id = session['user_id']
    
    # Ensure session ID exists
    if 'session_id' not in session:
        session['session_id'] = str(uuid4())
        
    session_id = session['session_id']
    
    # Update or create session entry
    if session_id in active_sessions.get(user_id, {}):
        # Update existing session
        active_sessions[user_id][session_id]['last_active'] = datetime.now()
    else:
        # Create new session without socket_id (will be added on WS connect)
        active_sessions[user_id][session_id] = {
            'last_active': datetime.now(),
            'status': 'active',
            'session_id': session_id,
            'socket_id': None  # Will be set on WebSocket connection
        }