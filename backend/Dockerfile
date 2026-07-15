# syntax = docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy app source (secrets come from runtime env, never bake .env into the image)
COPY src/ ./src/

EXPOSE 3001

ENV NODE_ENV=production

CMD ["node", "src/server.js"]
