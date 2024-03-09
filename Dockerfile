FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Copy the .env and .env.development files
COPY .env ./

RUN npm run build

EXPOSE 3001

CMD [ "npm", "run", "start:prod" ]