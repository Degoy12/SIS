# Moderne PWA mit FastAPI & React

Siehe modern-pwa-setup.md für vollständige Anleitung und Struktur.

## Starten (lokal)

1. Backend:
   ```bash
   cd server
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   pip install -r requirements.txt
   uvicorn app.main:app --reload --port 3001
   ```
2. Frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```
3. Docker (DBs):
   ```bash
   docker compose up -d
   ```

## Features
- FastAPI Backend mit Auth, User, JWT
- React + Vite + Tailwind + Zustand Frontend
- MongoDB, PostgreSQL, Redis
- PWA ready