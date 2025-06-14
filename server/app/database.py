from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import Request
import os

MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
MONGODB_DB = os.getenv("MONGODB_DB", "modern_pwa_mongo")

client = AsyncIOMotorClient(MONGODB_URL)
db = client[MONGODB_DB]

def get_db(request: Request):
    return db
