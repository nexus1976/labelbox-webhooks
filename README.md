# Labelbox Webhooks

This is a simple nodejs webapi project to accept the webhook posts from the microservice in the labelbox repo.

To run this project on your local environment, ensure you have node installed and run the following:
`npm ci`
`npm run start`

To run this project via Docker so that the running container from the labelbox microservice can access these webhooks, at the
root of this repo directory, run `docker-compose up`