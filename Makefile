# === Variables ===
COMPOSE = docker compose

# === Commands ===

up:
	$(COMPOSE) up --build

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) down && $(COMPOSE) up --build

logs:
	$(COMPOSE) logs -f

backend-shell:
	$(COMPOSE) exec backend bash

frontend-shell:
	$(COMPOSE) exec frontend sh

# === Placeholders pour évoluer ===

lint:
	@echo "TODO: lint backend and frontend"

test:
	@echo "TODO: run backend and frontend tests"
