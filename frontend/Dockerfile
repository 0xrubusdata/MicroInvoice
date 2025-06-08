# ---- Base image ----
FROM node:lts-slim

# ---- Set working directory ----
WORKDIR /app

# ---- Update system packages ----
RUN apt-get update && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# ---- Install dependencies ----
COPY package.json package-lock.json ./
RUN npm install

# ---- Copy source code ----
COPY . .

# ---- Expose the dev server port ----
EXPOSE 5173

# ---- Start Vite in dev mode with hot reload ----
CMD ["npm", "run", "dev"]