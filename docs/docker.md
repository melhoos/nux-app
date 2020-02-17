# Docker

## Dockerfile
A `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image.

## Docker ignore
Create a `dockerignore` file at root. List files that should be ignored. 

## Docker commands

### List Docker Images and Containers
`$docker images`
`$docker ps`
`$docker ps -a`

### Stop Docker Containers
`$docker stop <container id>`

### Remove Docker Images and Containers
`$docker rmi <image id>`
`$docker rm <container id>`

### Docker Build
The `docker build` command builds an image from a `Dockerfile` and a `context`. The build’s context is the set of files at a specified location `PATH` or `URL`. The `PATH` is a directory on your local filesystem. The `URL` is a Git repository location.

`$docker build -t <name> .` 
`-t` is for tag and specify the name of the image. 

Obs! Must run from same directory as the `Dockerfile`.

### Docker Run

`$docker run -p 8080:80 <name of image>`

To run the docker images to a container. 

`-p 8080:80` allows us to map the port `8080` on our local dev machine to port `80` inside the container 

### Docker Compose
`Compose` is a tool for defining and running multi-container Docker applications. With Compose, you use a `YAML`file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. 

So instead of running the `Docker build .` command, you can run the `$docker-compose up` command. 

## Sources
- https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f