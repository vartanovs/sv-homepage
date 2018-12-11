# 1. Remove image from local environment
# 2. Rebuild image with updated package.json

echo -e "\033[1;33m'CTRL + Z' to kill this script\033[0m"

echo -e "\033[1;36mRemoving existing image from local environment...\033[0m"
docker image rm vartanovs/sv-homepage-dependencies --force
echo -e "\033[1;36mRebuilding image with updated package.json...\033[0m"
docker build -t vartanovs/sv-homepage-dependencies -f Dockerfile-sv-homepage-dev .
echo -e "\033[1;32mDone!\033[0m"
echo -e "\033[1;33mREMINDER: 'docker push vartanovs/sv-homepage-dependencies' once you're satisfied with the new depencendies.\033[0m"
echo -e "\033[1;33mThis will push your image to Docker Hub for everyone else to use\033[0m"
