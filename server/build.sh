echo "🚀 Custom build script startet..."

pip install --upgrade pip
pip install -r requirements.txt
pip install python-jose[cryptography]

echo "✅ Installation abgeschlossen"