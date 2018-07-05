FROM nginx:alpine
LABEL name "starwars-static"
ARG app_path=/usr/share/nginx/html

COPY .next $app_path

COPY ./deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./deploy/nginx/nginx.crt /etc/nginx/ssl/server.crt
COPY ./deploy/nginx/nginx.key /etc/nginx/ssl/server.key

WORKDIR $app_path

EXPOSE 80