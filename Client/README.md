# p2p-voting

This is a p2p-voting app where users can add their photo links and after approval from admin they can participate in voting.

## Run Locally

First of all make sure you have your [p2p-relay server](https://github.com/Aayush0606/p2p-voting-relay_server) up and running

Clone the project

```bash
  git clone https://github.com/Aayush0606/p2p-voting
```

Install dependencies

```bash
  yarn install
```

After that change variables in .env file to your own keys

Start the server

```bash
  yarn dev
```

## Tech Stack

**Client:** [React.js](https://reactjs.org/), [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindui.com/), [Gun](https://gun.eco/)

**Server:** [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Gun](https://gun.eco/)
