# Projektplan: Moderne Web-Anwendung (PWA)

## 1. Projektaufbau & Infrastruktur (Woche 1–2)
- Git-Repository initialisieren, mit GitHub verbinden
- Projektstruktur anlegen (server/, client/)
- Python venv einrichten, requirements.txt erstellen
- .env-Datei vorbereiten
- FastAPI-Basis, Uvicorn-Server auf Port 3001
- PostgreSQL & MongoDB lokal einrichten (z.B. Docker)
- Verbindungen in FastAPI konfigurieren
- Frontend: Vite + React initialisieren, Tailwind CSS, Router

## 2. User-Management & Authentifizierung (Woche 3–4)
- User-Modell für PostgreSQL
- (Optional) Alembic für Migrationen
- Registrierung, Login, Logout (FastAPI)
- Passwort-Hashing (Passlib), JWT (PyJWT)
- Admin-Logik, Test-Accounts
- Frontend: Auth-Formulare, JWT-Handling

## 3. Kerndaten & Interaktion (Woche 5–6)
- Weitere Datenmodelle (PostgreSQL, MongoDB)
- CRUD-API für Kernmodelle
- Authentifizierungs- und Berechtigungslogik
- Frontend: Seitenstruktur, Interaktive Elemente

## 4. PWA & Testing (Woche 7–8)
- Vite Plugin PWA, Service Worker, Offline-Modus
- Unit- und Integrationstests (pytest, httpx)
- Logging, Fehlerbehandlung
- UI-Optimierung (Responsiveness, Dark Mode)

## 5. Deployment & CI/CD (Woche 9)
- Backend-Deployment (Render.com, Railway, VPS)
- Frontend-Deployment (Vercel, Netlify)
- CI/CD mit GitHub Actions
- Dokumentation, .env-Management

## 6. ToDo-Tracking (fortlaufend)
- Benutzer-API, JWT-Login, Frontend-Login, MongoDB-Schema, Admin UI, Tests, Deployment

---

# Venv im Git-Repository?

**Empfehlung:**
- Die virtuelle Umgebung (venv-Ordner) selbst sollte NICHT ins Git-Repository eingecheckt werden.
- Stattdessen eine `requirements.txt` (oder `pyproject.toml`) pflegen und eine `.gitignore`-Datei anlegen, die venv ausschließt:

```
venv/
.env
__pycache__/
```

**Jeder Entwickler** richtet lokal seine eigene venv ein:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

So bleibt das Repository sauber und reproduzierbar.
