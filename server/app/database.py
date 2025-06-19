import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Lädt Umgebungsvariablen aus der .env-Datei
load_dotenv()

# URI aus der Umgebungsvariablen holen
MONGO_URI = os.getenv("MONGO_URI")

# Fehler werfen, wenn URI fehlt
if not MONGO_URI:
    raise ValueError("MONGO_URI ist nicht gesetzt! Bitte .env Datei prüfen.")

# MongoDB-Client initialisieren
client = AsyncIOMotorClient(MONGO_URI)

# Mit der Datenbank verbinden – weil /sinsier in der URI steht, darfst du das hier nutzen:
db = client.get_default_database()
# Alternativ kannst du auch eine spezifische Datenbank angeben
# db = client["sinsier"]