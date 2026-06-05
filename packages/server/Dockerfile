FROM oven/bun:1.1-alpine AS base
WORKDIR /usr/src/app

COPY package.json ./

RUN bun install

COPY . .

RUN bun prisma generate

EXPOSE 3000

CMD [ "bun", "run", "index.ts" ]
