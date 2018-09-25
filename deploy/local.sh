#!/bin/bash

deploy/build.sh

docker build --no-cache -f .deployments/static/Dockerfile .deployments/static --tag starwars-static
docker build --no-cache -f .deployments/app/Dockerfile .deployments/app --tag starwars-app