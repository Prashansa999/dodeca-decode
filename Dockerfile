FROM node:20-alpine

WORKDIR /app

# No dependencies to install. Copy the static game and the tiny server.
COPY package.json server.js ./
COPY index.html styles.css game.js questions.js ./

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
