FROM node:16.14

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
