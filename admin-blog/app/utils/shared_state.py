# app/shared_state.py
from asyncio import Lock
from collections import defaultdict
import logging

logger = logging.getLogger(__name__)


user_locks = defaultdict(lambda: Lock())  # Per-user lock

