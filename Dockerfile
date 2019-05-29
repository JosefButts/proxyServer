FROM node:8
WORKDIR /proxyServer
COPY package.json /proxyServer
RUN npm install
COPY . /proxyServer
CMD node app.js
EXPOSE 8000
