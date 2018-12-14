# 1. Enter docker container in bash and run npm uninstall to update package.json
# 2. Remove image from local environment
# 3. Rebuild image with updated package.json
# 4. Push image to Docker Hub

echo -e "\033[1;33m'CTRL + Z' to kill this script\033[0m"

# If first argument is dev and second argument is not empty
if [ $1 = "dev" ] && [ ! -z $2 ]; then
  DEV=true
  # Grab all arguments after dev and assign to variable
  PACKAGE=${@:2}

# Else if first argument is not empty
elif [ ! -z $1 ]; then
  DEV=false
  # Grab all arguments and assign to variable
  PACKAGE=$@

# Else, inform user of syntax error
else
  echo -e "\033[00;31mMake sure to format the command properly:\033[0m"
  echo "- Dev dependency(ies): 'npm run dep-remove dev <PACKAGE1> <PACKAGE2> ...'."
  echo "- Regular depencency(ies): 'npm run dep-remove <PACKAGE1> <PACKAGE2> ...'."
  exit 1
fi

# Enter into Docker container in bash and run npm install --save or --save-dev
if [ $DEV = true ]; then
  echo -e "\033[1;36mUninstalling '$PACKAGE' in docker container as dev dependency(ies)...\033[0m"
  docker-compose run --rm --service-ports bash /bin/bash -c ". /root/.nvm/nvm.sh && npm uninstall --save-dev $PACKAGE" || { echo -e "\033[00;31mnpm uninstall failed\033[0m" ; exit 1; }
else
  echo -e "\033[1;36mUninstalling '$PACKAGE' in docker container as dependency(ies)... \033[0m"
  docker-compose run --rm --service-ports bash /bin/bash -c ". /root/.nvm/nvm.sh && npm uninstall --save $PACKAGE" || { echo -e "\033[00;31mnpm uninstall failed\033[0m" ; exit 1; }
fi

echo -e "\033[1;32mpackage.json has been updated\033[0m"
echo -e "\033[1;36mRemoving existing image from local environment...\033[0m"
docker image rm vartanovs/sv-homepage-dependencies --force
echo -e "\033[1;36mRebuilding image with updated package.json...\033[0m"
docker build -t vartanovs/sv-homepage-dependencies -f dev.Dockerfile .
echo -e "\033[1;36mPushing image to Docker Hub...\033[0m"
docker push vartanovs/sv-homepage-dependencies
echo -e "\033[1;32mDone!\033[0m"
