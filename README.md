# pubsub-microservice

## Overview

This project implements a Pub/Sub microservices architecture using **Node.js**, **Redis**, **MongoDB**, and **Docker**.  
It consists of two services:
- **Receiver Service**: Accepts incoming requests and stores them.
- **Listener Service**: Listens to events and processes data accordingly.

---

## Requirements

- Docker & Docker Compose installed  
- Git installed

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/salibshekh/pubsub-microservice.git
cd pubsub-microservice
```

---

### 2. Run with Docker Compose

Simply run:

```bash
docker compose up --build
```

This will:
- Build both services
- Start MongoDB and Redis containers
- Start Receiver and Listener services automatically

> ✅ No need to run nodemon or any service manually!

---

### 3. Project Structure

```plaintext
pubsub-microservice/
│
├— receiver-service/   → Handles API requests and pushes data to Redis
├— listener-service/   → Listens for events and processes them
├— docker-compose.yml  → Docker Compose configuration
└— README.md            → Project Documentation
```

---

## Environment Variables (.env)

Each service uses its own `.env` file:  
Example (`receiver-service/.env`):

```plaintext
PORT=5001
MONGO_URI=mongodb://mongodb-conta:27017/receiverDB
REDIS_HOST=my-redis
REDIS_PORT=6379
```

---

## Useful Commands

| Command | Description |
| ------ | ------ |
| `docker compose up --build` | Build and start all services |
| `docker compose down` | Stop and remove all services |
| `docker ps` | Check running containers |
| `docker logs <container_name>` | See logs of any container |

---

## Notes

- Make sure no other MongoDB or Redis service is already running locally.
- Always prefer running via Docker to avoid "port conflicts" or "connection refused" errors.

---



