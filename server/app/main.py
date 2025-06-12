# Hauptdatei für den Start der FastAPI-Anwendung
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def lese_wurzel():
    return {"nachricht": "Hallo, Welt!"}
