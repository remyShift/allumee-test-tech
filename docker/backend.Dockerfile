FROM python:3.11-slim

WORKDIR /app

# Installation des dépendances
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copie des fichiers du backend
COPY src/backend /app/backend

# Variables d'environnement
ENV PORT=8000
ENV PYTHONPATH=/app

# Exposition du port
EXPOSE 8000

# Commande de démarrage
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"] 