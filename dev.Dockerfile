# ubuntu 18.04 with node 10.14.1
FROM vartanovs/ubuntu-node

# Working directory for application
WORKDIR /usr/src/app

# npm install into /usr/src/app
# A wildcard is used to ensure package.json AND package-lock.json are copied
COPY package*.json /usr/src/app/
RUN source $HOME/.nvm/nvm.sh && npm install

# Set application's default ports
EXPOSE 3000 8080