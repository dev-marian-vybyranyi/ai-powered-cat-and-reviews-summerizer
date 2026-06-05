FROM oven/bun:1.1 AS base
WORKDIR /usr/src/app

COPY package.json ./

RUN NODE_ENV=development bun install

COPY . .

RUN DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy bun prisma generate

EXPOSE 3000

CMD [ "bun", "run", "index.ts" ]
