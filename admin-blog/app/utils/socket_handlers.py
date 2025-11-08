import asyncio
from uuid import uuid4
import logging
from datetime import datetime
from .status import get_user_status, format_status, notify_sessions
from .session_manager import active_sessions, validate_user_sessions

logger = logging.getLogger(__name__)

def register_socket_handlers(sio):
    @sio.on('connect')
    async def connect(sid, environ):
        try:
            # Extract user_id from query string
            query = environ.get('QUERY_STRING', '')
            user_id = None
            for param in query.split('&'):
                if param.startswith("user_id="):
                    user_id = str(param.split("=")[1])
                    break

            if not user_id:
                logger.warning("Connection rejected: No user_id provided")
                return False

            # Get HTTP session_id from cookies if available
            session_id = None
            cookies = environ.get('HTTP_COOKIE', '')
            for cookie in cookies.split(';'):
                if 'session=' in cookie.strip():
                    session_id = cookie.strip().split('session=')[1].split(';')[0]
                    break

            # Create new session_id if not from HTTP
            if not session_id:
                session_id = str(uuid4())

            # Ensure clean session structure
            validate_user_sessions(user_id)

            # Register WebSocket connection
            active_sessions.setdefault(user_id, {})[session_id] = {
                'last_active': datetime.now(),
                'status': 'active',
                'socket_id': sid,
                'session_id': session_id
            }

            return True
            
        except Exception as e:
            logger.error(f"Connection error: {str(e)}", exc_info=True)
            return False

    @sio.on('disconnect')
    async def disconnect(sid):
        try:
            for user_id, sessions in list(active_sessions.items()):
                for session_id, session_data in list(sessions.items()):
                    if not isinstance(session_data, dict):
                        continue
                        
                    if session_data.get('socket_id') == sid:
                        # Only remove if no HTTP activity expected
                        if not session_data.get('http_active', False):
                            del active_sessions[user_id][session_id]
                        else:
                            # Just clear socket_id for HTTP sessions
                            active_sessions[user_id][session_id]['socket_id'] = None
                            
                        await notify_sessions(user_id, 'session_update', {
                            'type': 'disconnect',
                            'session_id': session_id
                        })
                        
                        # Remove user if no sessions left
                        if not active_sessions[user_id]:
                            del active_sessions[user_id]
                        break
        except Exception as e:
            logger.error(f"Disconnect error: {str(e)}", exc_info=True)

    @sio.on("request_status_update")
    async def handle_request_status_update(sid):
        try:
            # Find user_id for this socket
            user_id = None
            session_id = None
            
            for uid, sessions in active_sessions.items():
                for sess_id, sess_data in sessions.items():
                    if isinstance(sess_data, dict) and sess_data.get('socket_id') == sid:
                        user_id = uid
                        session_id = sess_id
                        break
                if user_id:
                    break

            if not user_id:
                logger.warning(f"No user found for socket: {sid}")
                return

            # Update last active time
            active_sessions[user_id][session_id]['last_active'] = datetime.now()

            # Get and send status
            status = await get_user_status(user_id)
            status_update = await format_status(status, user_id)
            await notify_sessions(user_id, 'status_update', status_update)
            
        except Exception as e:
            logger.error(f"Status update error: {str(e)}", exc_info=True)