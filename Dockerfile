FROM node:20.12.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN yarn global add vite

COPY ./app/package*.json ./
COPY ./app/yarn*.lock ./

RUN yarn install

COPY ./app .

