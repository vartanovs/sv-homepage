# set the base image to Ubuntu
# https://hub.docker.com/_/ubuntu/
FROM ubuntu:18.04

SHELL ["/bin/bash", "-c"]

# update the repository sources list
# install depencencies
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean

# replace shell with bash so we can source files
# RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# node version manager nvm environment variable
ENV NODE_VERSION 10.14.1

# install node version manager, node and npm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

# add node and nvm to path so the commands are available
ENV NODE_PATH $HOME/.nvm/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH $HOME/.nvm/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN source $HOME/.nvm/nvm.sh \
  && nvm --version \
  && node -v \
  && npm -v