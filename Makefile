.DEFAULT_GOAL := help

build: ## build develoment
	if ! [ -f .env ];then cp .env.example .env;fi
	docker-compose up -d postgres
	npm install
	npx prisma migrate dev --preview-feature -n 'First Migration'
	npx prisma generate
	node db_init.js

prisma-gen: ## Run prisma generate
	npx prisma generate

prisma-studio: ## Run prisma Studio
	npx prisma studio

prisma-migrate: ## Run prisma Migration
	npx prisma migrate dev --preview-feature

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
