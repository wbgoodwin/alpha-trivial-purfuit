FROM node:12
WORKDIR /app

ENV environment=development

COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
