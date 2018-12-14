# ubuntu 18.04 with node 10.14.1
FROM vartanovs/ubuntu-node

# Working directory for application
WORKDIR /usr/src/app

# npm install into /usr/src/app
# A wildcard is used to ensure package.json AND package-lock.json are copied
COPY package*.json /usr/src/app/
RUN . $HOME/.nvm/nvm.sh && npm install

# copy webapp files to container & build production
COPY . /usr/src/app/
RUN . $HOME/.nvm/nvm.sh && npm run build:prod

# Set application's default port
EXPOSE 3000

# Start server in container
CMD ["/bin/bash", "-c", "./scripts/start-prod-app.sh"]