import asyncio
import os
from quart import Quart, Blueprint, render_template, request, redirect, url_for, session, flash
from sqlalchemy import select
from .. database import async_session, User
from .. utils.common import hash_password, verify_password
from .. auth.oauth import oauth
from .. config import configure_app
from ..utils.shared_state import user_locks

import logging
from urllib.parse import urljoin

auth_bp = Blueprint('auth', __name__)
logger = logging.getLogger(__name__)

@auth_bp.route('/register', methods=['GET', 'POST'])
async def register():
    if request.method == 'POST':
        form = await request.form
        email = form['email']
        password = form['password']
        
        if not password or len(password) < 6:
            return await render_template('dashboard.html', error="Password must be at least 6 characters")
        
        async with async_session() as db:
            existing = await db.execute(select(User).filter_by(email=email))
            if existing.scalar():
                return await render_template('register.html', error="Email already exists")

            user = User(email=email, password_hash=hash_password(password), is_social_account=False)
            db.add(user)
            await db.commit()
        return redirect(url_for('auth.login'))

    return await render_template('register.html')

@auth_bp.route('/login', methods=['GET', 'POST'])
async def login():
    if request.method == 'POST':
        form = await request.form
        email = form['email']
        password = form['password']

        async with async_session() as db:
            result = await db.execute(select(User).filter_by(email=email))
            user = result.scalar()
            
            # Check if user exists and has a password hash (not a social account)
            if user and user.password_hash:
                if verify_password(password, user.password_hash):
                    user_id = user.id
                    # Create a new lock if it doesn't exist or if it's bound to a different loop
                    if user_id not in user_locks or user_locks[user_id]._loop is not asyncio.get_running_loop():
                        user_locks[user_id] = asyncio.Lock()
                    
                    async with user_locks[user_id]:
                        session['user_id'] = user.id
                        session['email'] = user.email
                        
                        # ✅ KEEP THIS: Check if there's a pending SSID to redirect to credentials page
                        if 'pending_ssid' in session:
                            return redirect(url_for('blog.deriv_credentials'))
                        
                        return redirect(url_for('dashboard.home'))
                else:
                    # Password doesn't match
                    return await render_template('login.html', error="Invalid email or password")
            elif user and user.is_social_account:
                # User exists but registered via social login
                return await render_template('login.html', error="This email is registered with Google login. Please use Google to sign in.")
            else:
                # User doesn't exist
                return await render_template('login.html', error="Invalid email or password")

    return await render_template('login.html')

@auth_bp.route('/logout')
async def logout():
    if 'user_id' in session:
        user_id = session['user_id']    

    session.clear()
    return redirect(url_for('auth.login'))

@auth_bp.route('/login/google')
async def login_google():
    state_serializer = configure_app(Quart(__name__))  # Temporary app for serializer
    if os.environ.get('FLASK_ENV') == 'development':
        base_url = request.host_url
    else:
        base_url = 'https://blog.spinncode.com/'  # Changed to deriv domain

    redirect_path = url_for('auth.authorize_google', _external=False)
    redirect_uri = urljoin(base_url.rstrip('/') + '/', redirect_path.lstrip('/'))
    redirect_uri = redirect_uri.replace('//', '/').replace(':/', '://')

    logger.info(f"Using redirect URI: {redirect_uri}")
    state = state_serializer.dumps(redirect_uri)
    session['oauth_state'] = state
    
    # FIX: Remove await - this returns a Response object, not a coroutine
    return oauth.google.authorize_redirect(redirect_uri, state=state)

@auth_bp.route('/authorize/google')
async def authorize_google():
    state_serializer = configure_app(Quart(__name__))
    try:
        expected_state = state_serializer.loads(session.pop('oauth_state'))
        received_state = state_serializer.loads(request.args['state'])

        if not expected_state or not request.args.get('state'):
            raise ValueError("Missing state parameter")

        if expected_state != received_state:
            raise ValueError("Invalid state parameter")

        # This one DOES need await
        token = await oauth.google.authorize_access_token()
        userinfo = token.get('userinfo', {})
        email = userinfo.get('email')

        if not email:
            raise ValueError("No email in response")

        async with async_session() as db:
            user = await db.execute(select(User).filter_by(email=email))
            user = user.scalar()
            if not user:
                user = User(email=email, is_social_account=True)
                db.add(user)
                await db.commit()
                await db.refresh(user)

        session.permanent = True
        session['user_id'] = user.id
        session['email'] = user.email

        logger.info(f"User {user.id} logged in via Google OAuth")

        # KEEP THIS: Check if there's a pending SSID to redirect to credentials page
        if 'pending_ssid' in session:
            logger.info("Redirecting to credentials page due to pending SSID")
            return redirect(url_for('blog.deriv_credentials'))
        
        return redirect(url_for('dashboard.home'))

    except Exception as e:
        logger.error(f"OAuth error: {e}", exc_info=True)
        await flash("Google login failed")
        return redirect(url_for('auth.login'))