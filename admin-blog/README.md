# AutoBotWeb

AutoBotWeb is a web application built with Quart (an async Flask alternative) for automated trading with Deriv, featuring real-time signal handling via MQTT, Google OAuth authentication, proxy management, and a responsive dashboard styled with Tailwind CSS. The application supports user authentication, real-time status updates via Socket.IO, and integration with the Deriv API for trading operations.

## Features

- **User Authentication**: Email/password and Google OAuth login.
- **Real-Time Dashboard**: Displays trading status, MQTT signals, and proxy settings using Socket.IO.
- **Deriv Integration**: Start/stop trading sessions and manage credentials.
- **MQTT Signal Handling**: Processes trading signals in real-time.
- **Proxy Management**: Configure and test proxy connections.
- **Responsive UI**: Built with Jinja templates and Tailwind CSS.

## Project Structure

Below is the project structure, organized for modularity and maintainability:

```
AutoBotWeb/
├── .env                      # Environment variables (e.g., SECRET_KEY, DATABASE_URL)
├── .gitignore               Ross
├── pyproject.toml            # Python project metadata and dependencies
├── requirements.txt          # Python dependencies
├── README.md                # Project documentation
├── run.py                   # Entry point to run the Quart application
├── run_in_termux.sh         # Script for running in Termux
├── Ubutu.service            # Systemd service file for deployment
│
├── app/
│   ├── __init__.py          # Initializes the Quart app and extensions
│   ├── config.py            # Configuration settings (e.g., database URI)
│   ├── routes/              # Blueprint modules for routes
│   │   ├── __init__.py
│   │   ├── auth.py          # Authentication routes (login, register, OAuth)
│   │   ├── dashboard.py     # Dashboard routes (home, status API)
│   │   ├── proxy.py         # Proxy management routes
│   │   ├── blog.py        # Deriv trading routes
│   │   ├── signal.py        # Signal handling routes
│   ├── services/            # Business logic and external integrations
│   │   ├── __init__.py
│   │   ├── mqtt_handler.py  # MQTT signal handling
│   │   ├── deriv_wrapper.py # Deriv API wrapper
│   │   ├── session_manager.py # Manages active sessions and Socket.IO
│   ├── models/              # SQLAlchemy database models
│   │   ├── __init__.py
│   │   ├── user.py          # User model
│   ├── utils/               # Common utility functions
│   │   ├── __init__.py
│   │   ├── common.py        # Password hashing, OAuth state serialization
│   ├── pyquotex/            # Deriv API library
│   │   ├── api.py
│   │   ├── config.py
│   │   ├── expiration.py
│   │   ├── global_value.py
│   │   ├── stable_api.py
│   │   ├── http/            # HTTP-related Deriv utilities
│   │   ├── utils/           # Deriv utility functions
│   │   ├── ws/              # WebSocket-related Deriv utilities
│   ├── templates/           # Jinja templates
│   │   ├── dashboard.html
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── proxy_settings.html
│   │   ├── deriv_credentials.html
│   │   ├── register.html
│   │   ├── signal.html
│   │   ├── token_verification.html
│   ├── static/              # Static assets
│   │   ├── css/             # CSS files (Tailwind CSS)
│   │   │   ├── tailwind.css
│   │   │   ├── output.css
│   │   ├── js/              # JavaScript files
│   │   │   ├── dashboard.js
│   │   ├── img/             # Images (e.g., logos)
│   ├── data/                # Data storage
│   │   ├── database/        # SQLite database
│   │   │   ├── autobot_users.db
│   │   ├── logs/            # Log files
│   │   │   ├── pyquotex.log
│   │   │   ├── deriv_api.log
│   │   ├── sessions/        # Session data
│   │   │   ├── session.json
│   │   │   ├── users/       # User-specific session files
│   │   │   │   ├── 1.json
│   │   │   │   ├── None.json
│   │   ├── settings/        # Configuration files
│   │   │   ├── config.ini
│   │   │   ├── users/       # User-specific settings
│   │   │   │   ├── 1.ini
│   │   │   │   ├── None.ini
│   ├── tests/               # Unit tests
│   │   ├── __init__.py
│   │   ├── test_app.py
│   │   ├── test_proxy_connection.py
│
├── scripts/                 # Utility scripts
│   ├── init_db.py           # Database initialization script
│
├── .vscode/                 # VS Code configurations
│   ├── settings.json        # Editor settings for development
│   ├── tailwind.json        # Tailwind CSS IntelliSense config
│
├── node_modules/            # Node.js dependencies (Tailwind, TypeScript)
├── package.json             # Frontend dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
```

### Directory and File Descriptions

- **`.env`**: Stores sensitive environment variables (e.g., `SECRET_KEY`, `DATABASE_URL`). Not tracked in Git.
- **`app/`**: Contains the core Quart application code.
  - **`routes/`**: Modular blueprints for routes (e.g., authentication, dashboard, proxy).
  - **`services/`**: Business logic for MQTT, Deriv, and session management.
  - **`models/`**: SQLAlchemy models for database interactions.
  - **`utils/`**: Shared utility functions (e.g., password hashing).
  - **`pyquotex/`**: Custom library for Deriv API interactions.
  - **`templates/`**: Jinja templates for rendering HTML pages.
  - **`static/`**: Static assets (CSS, JavaScript, images).
  - **`data/`**: Stores database, logs, sessions, and settings.
  - **`tests/`**: Unit tests for the application.
- **`scripts/`**: Utility scripts, such as database initialization.
- **`.vscode/`**: VS Code settings for enhanced development experience (e.g., Tailwind IntelliSense, Prettier).
- **`node_modules/`**, **`package.json`**, **`tailwind.config.js`**: Frontend dependencies and Tailwind CSS configuration.

## Prerequisites

- Python 3.8+
- Node.js 14+ (for Tailwind CSS)
- SQLite (included with Python)
- Redis (optional, for production session storage)

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd AutoBotWeb
   ```

2. **Set Up Python Environment**:

   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory:
     ```bash
     SECRET_KEY=your-secret-key
     DATABASE_URL=sqlite:///app/data/database/autobot_users.db
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     ```

4. **Initialize the Database**:

   ```bash
   python scripts/init_db.py
   ```

5. **Set Up Tailwind CSS**:

   ```bash
   npm install
   npm run build:css
   ```

6. **Run the Application**:
   ```bash
   python run.py
   ```
   - Access the app at `http://localhost:5000`.

## Usage

- **Register/Login**: Create an account or log in via email/password or Google OAuth.
- **Dashboard**: View real-time trading status, MQTT signals, and proxy settings.
- **Deriv**: Start/stop trading sessions and configure credentials.
- **MQTT**: Enable real-time signal processing.
- **Proxy**: Configure and test proxy settings for secure connections.

## Testing

Run unit tests using `pytest`:

```bash
pip install pytest pytest-asyncio
pytest app/tests/
```

## Deployment

- **Production Server**: Use `gunicorn` with `hypercorn` for ASGI support:
  ```bash
  pip install gunicorn hypercorn
  gunicorn -k hypercorn.workers.HypercornWorker run:app
  ```
- **Redis**: Configure Redis for session storage in production.
- **HTTPS**: Use a reverse proxy (e.g., Nginx) with SSL certificates.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

MIT License. See `LICENSE` for details.
