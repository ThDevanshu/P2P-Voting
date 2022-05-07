# Relay server for p2p-voting

This server acts as relay server for [p2p-voting](https://github.com/Aayush0606/p2p-voting) application.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Aayush0606/p2p-voting-relay_server
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  node index.js
```

(Deploying server shuld be preferred even in development)

## Deployment

We will deploy this server on [Herkou](https://heroku.com) (make sure you have a heroku account)

To deploy this project first login into your heroku account

```bash
  heroku login
```

Then use :

```bash
  heroku create your_app_name
  git add .
  git commit -am "First commit"
  heroku git:remote -a your_app_name
  git push heroku master
```

## Tech Used

[Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Gun](https://gun.eco/)
