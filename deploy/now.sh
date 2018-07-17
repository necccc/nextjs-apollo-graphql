#!/bin/bash

deploy/build.sh

now --team starwars --docker --public .deployments/static

ASSETURL="$(now ls --team starwars starwars-static 2> /dev/null | grep starwars-static |awk '{print $ 2}')"

APIURL="$(now ls --team starwars starwars-graphql 2> /dev/null | grep starwars-graphql |awk '{print$ 2}')"

DEPLOY_APP="now --team starwars --docker --public -e NODE_ENV=\"production\" -e ASSET_URL=\"https://$ASSETURL\" -e API_URL=\"https://$APIURL/graphql\" -e APP_PORT=80 .deployments/app"

eval $DEPLOY_APP