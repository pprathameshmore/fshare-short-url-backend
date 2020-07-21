# FShare - URL Shortening Service

This service handles URL shortening operations.

## API Documentation

https://documenter.getpostman.com/view/8028791/T1DmCdhX?version=latest

## Setup

Install dependency:

```
npm install
```

Run app:

```
node src/app.js
```

### Docker

Build Docker Image

```
docker build -t fshare-short-url-image .
```

Run Docker Image

```
docker run --name fshare-short-url fshare-short-url-image
```

Backend

- Express.js
- MongoDB
