import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise ValueError("MONGO_URI ist nicht gesetzt! Bitte Umgebungsvariable konfigurieren.")

client = AsyncIOMotorClient(MONGO_URI)
db = client["sample_mflix"]  # <- WICHTIG: Datenbankname hier fest angeben
