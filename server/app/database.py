from motor.motor_asyncio import AsyncIOMotorClient
import os

# Hole den Mongo-Link aus den Umgebungsvariablen bei Render
MONGO_URI = os.environ.get("MONGO_URI")

# Stelle Verbindung zur MongoDB her
client = AsyncIOMotorClient(MONGO_URI)

# Nimm die Standard-Datenbank (aus dem Mongo-Link)
db = client.get_default_database()
