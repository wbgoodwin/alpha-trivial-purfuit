FROM node:12
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ENV REACT_APP_SERVER_HOST=http://server:3001
