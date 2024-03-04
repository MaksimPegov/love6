#!/bin/sh
# This script is used to run the application

docker compose down
docker compose pull
docker compose up --build -V -d