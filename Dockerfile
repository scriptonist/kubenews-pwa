FROM nginx:1.13.9-alpine 
RUN rm -rf /etc/nginx/sites-enabled/*
RUN rm -rf /etc/nginx/conf.d/*
COPY ./dist /usr/share/nginx/html
EXPOSE 80
