.PHONY: build start stop

build:
	docker-compose build

start:
	docker-compose up -d

up:
    docker-compose build
    docker-compose up -d
	
stop:
	docker-compose down