FROM node:15.10.0-alpine3.10 as development
WORKDIR /usr/src/backend
COPY package*.json ./
RUN npm install --only=development
ENV NODE_ENV=development
COPY . .
RUN npm run build
COPY config.dev.yml /dist/


FROM node:15.10.0-alpine3.10 as production
WORKDIR /usr/src/backend
COPY package*.json ./
RUN npm install --only=production
ENV NODE_ENV=production
COPY . .
COPY --from=development /usr/src/backend/dist ./dist
COPY config.prod.yml /dist/