#!/bin/bash

rm -rf .deployments
rm -rf .next

npm run build:next

mkdir -p .deployments .deployments/app .deployments/static

cp -Rf .next .deployments/static
cp -Rf deploy/prod.env .deployments/static
cp -Rf deploy/static.Dockerfile .deployments/static/Dockerfile
mkdir -p .deployments/static/deploy .deployments/static/deploy/nginx
cp -Rf deploy/nginx .deployments/static/deploy

cp -Rf .next .deployments/app
cp -Rf server .deployments/app
cp -Rf index.js .deployments/app
cp -Rf next.config.js .deployments/app
cp -Rf package.json .deployments/app
cp -Rf routing.js .deployments/app

cp -Rf package.json .deployments/app
cp -Rf deploy/prod.env .deployments/app
cp -Rf deploy/app.Dockerfile .deployments/app/Dockerfile