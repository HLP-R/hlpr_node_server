# Dockerfile to build the container
FROM node:6

# Update the node files
RUN apt-get update && npm install .
