FROM oven/bun:latest AS base

WORKDIR /usr/src/app

COPY bun.lockb .
COPY package*.json .

RUN bun install

COPY . .