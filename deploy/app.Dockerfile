FROM node:10.5-alpine

LABEL name "starwars-app"

ARG app_path=/opt/local/app

COPY . $app_path

WORKDIR $app_path

RUN npm install --only=prod

CMD ["npm", "run", "start:prod"]

EXPOSE 80