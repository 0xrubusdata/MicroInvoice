# ---- Base image ----
FROM python:3.11-slim

# ---- Environment setup ----
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ---- Working directory ----
WORKDIR /app

# ---- System dependencies ----
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# ---- Python dependencies ----
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# ---- Copy application code ----
COPY . /app

# ---- Default command ----
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
