FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --only=production

# Bundle app source
COPY . .

ENV NODE_ENV=production
ENV PORT=3004

EXPOSE 3004
CMD [ "npm", "start" ]
