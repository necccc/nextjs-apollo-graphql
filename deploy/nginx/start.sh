#!/bin/bash

ln -s /etc/nginx/sites-available/default-ssl /etc/nginx/sites-enabled/default-ssl

echo "Starting nginx"
nginx -g "daemon off;"