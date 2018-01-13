# TypeScript Webpack Node Docker Starter
## Quick start any front end project with typescript, and webpack, and node. Build with and deploy with docker for continuous integration.

* React / Redux UI written in TypeScript, Node server
* Quick and easy development with Hot Module Reloader
* Test server with Mocha and UI with Karma
* Build and Deploy with Github and Docker

## Install Dependencies
* `npm i`
## Run in Dev Mode
* `npm run dev`
    * starts node server using nodemon for restart-on-save functionality
    * pulls webpack config in and serves UI using webpack middleware and hot module reloading

## Run Tests
* `npm run test`

## Production Workflow
### Build Prod
* `npm run build-prod`
### Run Prod
* `sudo npm start`

## Setting Up Docker
* [configure docker-cloud to watch github and deploy new builds to digitalocean](https://medium.com/@trekhleb/docker-whale-in-digital-ocean-or-automated-continuous-delivery-flow-for-simple-projects-fbfb2c26bf14)

### Some Helpful Docker Commands for local testing
* `docker build -t <image_name> .`
* `docker images` copy the IMAGE ID for <image_name>
* `docker run <IMAGE_ID>`
* to get docker ip address `docker ps` and grab CONTAINER_ID. `docker inspect <CONTAINER_ID> | grep IPAddress`
* To remove image, `docker rmi -f <IMAGE_ID>`