FROM --platform=linux/amd64 nginx

WORKDIR /usr/share/nginx/html

COPY ./build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY start-nginx.sh /usr/bin/start-nginx.sh

RUN chmod +x /usr/bin/start-nginx.sh
RUN chmod -R +r images

ENTRYPOINT ["start-nginx.sh"]