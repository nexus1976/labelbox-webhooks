FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3030
CMD [ "npm", "run", "start" ]