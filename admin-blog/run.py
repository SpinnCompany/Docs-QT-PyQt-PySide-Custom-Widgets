import asyncio
import logging
import os
import sys

from hypercorn.asyncio import serve
from hypercorn.config import Config
from app import sio_app

# Configure logging to show ALL logs
logging.basicConfig(
    # level=logging.DEBUG,  # Changed from INFO to DEBUG
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)

# Set specific loggers to DEBUG level
loggers = [
    'blog', 'admin-blog',
]

for logger_name in loggers:
    logging.getLogger(logger_name).setLevel(logging.DEBUG)

# # Optional: Enable very verbose asyncio debugging
# os.environ['PYTHONASYNCIODEBUG'] = '1'

# # Optional: Add file handler to save all logs to file
# file_handler = logging.FileHandler('debug.log', mode='w')
# file_handler.setLevel(logging.DEBUG)
# file_handler.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))
# logging.getLogger().addHandler(file_handler)

# # Enable hypercorn access logs
# config = Config()
# config.accesslog = logging.getLogger('hypercorn.access')
# config.errorlog = logging.getLogger('hypercorn.error')
# config.loglevel = 'debug'  # Set hypercorn log level to debug

if __name__ == '__main__':
    config = Config()
    config.bind = ["0.0.0.0:3002"]

    config.use_reloader = True

    try:
        logging.info("Starting server...")
        asyncio.run(serve(sio_app, config))
    except KeyboardInterrupt:
        logging.info("\nServer interrupted. Shutting down cleanly...")
        sys.exit(0)
