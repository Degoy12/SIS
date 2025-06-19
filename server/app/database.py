import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# .env laden (nur lokal wichtig)
load_dotenv()

# Mongo-Verbindungslink aus Umgebungsvariablen
MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise ValueError("MONGO_URI ist nicht gesetzt! Bitte Umgebungsvariable konfigurieren.")

# Verbindung zu MongoDB aufbauen
client = AsyncIOMotorClient(MONGO_URI)

# ✅ Hier die richtige Datenbank wählen
db = client["sample_mflix"]
