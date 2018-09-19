FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./
COPY ecosystem.config.js ./

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN npm install pm2 -g

RUN yarn install

#Copy all files into the working dir
COPY . .

#Add the .env file so this builds correctly
ADD .env.example ./.env

EXPOSE 3000

RUN yarn build

#CMD ["yarn", "start"]
CMD ["pm2-docker", "ecosystem.config.js"]