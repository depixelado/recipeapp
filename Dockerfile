FROM node

RUN apt-get update && apt-get upgrade -y \
  && apt-get clean

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/

RUN npm install

CMD [ "npm", "build" ]

COPY dist /app

EXPOSE 80