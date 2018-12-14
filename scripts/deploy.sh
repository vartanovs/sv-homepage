# Set EB BUCKET as env variable
EB_BUCKET=elasticbeanstalk-us-west-2-436925851720
aws configure set default.region us-west-2
eval $(aws ecr get-login --no-include-email --region us-west-2)
docker --version

# Build docker image based on dockerfile-prod
# NO SPACES between scopes e.g. scopes-1,scopes-2,scopes-3
docker build -t vartanovs/sv-homepage -f prod.Dockerfile .

# Push built image to ECS
docker tag vartanovs/sv-homepage:latest 436925851720.dkr.ecr.us-west-2.amazonaws.com/sv-homepage:$TRAVIS_COMMIT
docker push 436925851720.dkr.ecr.us-west-2.amazonaws.com/sv-homepage:$TRAVIS_COMMIT
# Replace <VERSION> in Dockerrun file with Travis SHA
sed -i='' "s/<VERSION>/$TRAVIS_COMMIT/" Dockerrun.aws.json
# Zip modified Dockerrun with any ebextensions
zip -r sv-homepage-prod-deploy.zip Dockerrun.aws.json .ebextensions
# Upload zip file to s3 bucket
aws s3 cp sv-homepage-prod-deploy.zip s3://$EB_BUCKET/sv-homepage-prod-deploy.zip
# Create a new application version with new Dockerrun
aws elasticbeanstalk create-application-version --application-name sv-homepage --version-label $TRAVIS_COMMIT --source-bundle S3Bucket=$EB_BUCKET,S3Key=sv-homepage-prod-deploy.zip
# Update environment to use new version number
aws elasticbeanstalk update-environment --environment-name sv-homepage-prod --version-label $TRAVIS_COMMIT
