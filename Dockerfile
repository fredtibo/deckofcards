FROM node:10.12.0-alpine
LABEL maintainer="FredTibo <fredtibo74@hotmail.com>"

RUN apk add --no-cache bash
RUN npm install -g @angular/cli

COPY docker/usr/local/bin/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

WORKDIR /opt/deck-of-cards
EXPOSE 4220
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["/bin/bash"]
