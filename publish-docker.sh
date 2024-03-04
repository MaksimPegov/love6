#!/usr/bin/env bash

VERSION=0.0.1
USERNAME=maksimpegov
IMAGE=alinka-frontend

docker buildx build --platform linux/amd64 -f -t $USERNAME/$IMAGE:latest . && \
docker push $USERNAME/$IMAGE:latest

yarn build && \
docker build -t $USERNAME/$IMAGE:latest . && \
docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$VERSION && \
docker push $USERNAME/$IMAGE:latest && \
docker push $USERNAME/$IMAGE:$VERSION