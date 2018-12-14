#!/bin/bash
# start-prod-app.sh - script run at startup of container in production image

(/bin/bash -c ". /root/.nvm/nvm.sh && npm start")
