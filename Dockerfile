FROM node

WORKDIR /app

RUN apt-get update && apt-get install -y wget bzip2 libxtst6 libgtk-3-0 libx11-xcb-dev libdbus-glib-1-2 libxt6 libpci-dev && rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=secret

CMD ["npm", "run", "test"]
