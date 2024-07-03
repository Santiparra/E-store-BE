## CURRENTLY UNDER REWORK (07/24)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Prod

1. Clone this Repository.

2. Create an `.env` file at the root directory of the project (use the provided `.env.template` as a guide for the bare minimum required env variables needed since they are type safe checked using dotenv and joi).

3. Clone all required sub-modules needed to build our images. To do this, simply execute the following command: 
```bash
git submodule update --init --recursive
```

4. Build your own Docker images for all the required microservices. To do this execute the following command: 
```bash
docker compose -f docker-compose.prod.yml build
```

5. To start the new generated images into a new container execute the following command: 
```bash
docker compose -f docker-compose.prod.yml up
```

## Dev

1. Clone this Repository.

2. Create an `.env` file at the root directory of the project (use the provided `.env.template` as a guide for the bare minimum required env variables needed since they are type safe checked using dotenv and joi).

3. Clone all required sub-modules needed to build our docker container. To do this, simply execute the following command: 
```bash
git submodule update --init --recursive
```

4. Build and start your own Docker container with all the required services. To do this execute the following command: 
```bash
docker compose up --build
```

## Important!

1. Please note that in development we don`t use our production database in our orders microservice, this is intentional and we should use different databases for every microservice when working on a development environment, i have not done so since this repo is for demo purposes but you are free to create your own database duplicates for development and change the environment variables accordingly.

2. Alternatively (not recommended) you could also skip this Repo entirely and build each module independently but you will also need to build and/or run NATS and each Database individually as well. To do this simply use this repo to navigate to each sub-module, clone each one and follow all the instructions provided on each individual module readme file.