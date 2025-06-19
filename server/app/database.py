import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Lädt Umgebungsvariablen aus einer .env-Datei (optional, aber nützlich lokal)
load_dotenv()

# Holt die URI für MongoDB aus den Umgebungsvariablen
MONGO_URI = os.getenv("MONGO_URI")

# Fehler werfen, wenn keine URI vorhanden ist
if not MONGO_URI:
    raise ValueError("MONGO_URI ist nicht gesetzt! Bitte Umgebungsvariable konfigurieren.")

# MongoDB-Client starten
client = AsyncIOMotorClient(MONGO_URI)

# Hier den Namen deiner Datenbank einsetzen (z. B. "sinsier")
db = client["sinsier-db"]
