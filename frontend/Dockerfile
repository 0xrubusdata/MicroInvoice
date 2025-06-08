# ---- Base image ----
FROM node:20-slim

# ---- Set working directory ----
WORKDIR /app

# ---- Install dependencies ----
COPY package.json package-lock.json* ./
RUN npm install

# ---- Copy source code ----
COPY . .

# ---- Expose the dev server port ----
EXPOSE 3000

# ---- Start Vite in dev mode with hot reload ----
CMD ["npm", "run", "dev", "--", "--host"]
