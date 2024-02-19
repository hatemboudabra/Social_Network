# Utiliser une image de base Node.js
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers nécessaires
COPY package*.json ./
COPY server.js ./
COPY models ./models
COPY routes ./routes
#COPY swagger ./swagger

# Installer les dépendances
RUN npm install

# Exposer le port sur lequel l'application écoute
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["node", "server.js"]
