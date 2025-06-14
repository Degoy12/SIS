# Скрипт для одновременного запуска frontend (React) и backend (FastAPI)
# Используйте PowerShell для запуска этого скрипта из корня проекта

Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd client; npm run dev'
Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd server; uvicorn app.main:app --reload --port 3001'

Write-Host "Frontend läuft auf http://localhost:3002"
Write-Host "Backend läuft auf http://localhost:3001"
