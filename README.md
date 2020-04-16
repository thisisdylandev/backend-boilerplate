# README

A quickstart boilerplate project for creating an express app, and connecting to a MySQL database

## Table of Contents

- [Installation](#installation)
- [Details](#details)
- [Debugging](#debugging)
- [Contributing](#contributing)

## Installation

To install this project, you will need to have [Docker](https://docs.docker.com/get-docker/) installed on your machine.

Once you are ready, run `docker-compose up` in the root directory of this project to spin up everything

## Details

The initial boilerplate was created using [express-generator](https://expressjs.com/en/starter/generator.html)

Added the following tools to lint & enforce code style:

- eslint
- prettier
- .editorconfig

Added [sequelize](https://sequelize.org/) to connect to a MySQL database

Created a Dockerfile for building the node container, and docker-compose.yml to build the container network, node container and MySQL container.

Uses [nvm](https://github.com/nvm-sh/nvm) for managing node versions for multiple contributors.

## Debugging

To instart debugging, run `npm run debug` in the root directory of the project.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request.](https://github.com/ctrlaltdylang/backend-boilerplate/compare)