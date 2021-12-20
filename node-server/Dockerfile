FROM node:alpine
RUN apk add bash
WORKDIR /usr/src/app
COPY . /usr/src/app
ENTRYPOINT ["npm", "i"]
ENTRYPOINT ["npm", "start"]
CMD ["tail", "-f", "/dev/null"]