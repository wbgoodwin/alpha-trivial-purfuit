FROM node:12
WORKDIR /app

ENV environment=development
ENV DB_HOST=database
ENV DB_DATABASE=trivial_purfuit_database
ENV DB_USER=root
ENV DB_PASSWORD=root
ENV DB_PORT=3306

COPY package.json ./
RUN npm install
COPY . .
CMD ["sh", "-c", "npm run db:migrate && npm run db:seed && npm start"]
