FROM nginx:1.23.2-alpine

COPY ./dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
