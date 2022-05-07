
# Peer-to-Peer voting app

A Decentralized voting app where anyone can vote their favourite candidate. Users can also participate as candidate after submitting their request and getting approval from admin.


# Problem elaboration

## Problem
Current voting systems like ballot box voting or electronic voting suffer from various security threats such as:
- Security Breaches like data leaks, vote tampering.
- Long Queues during elections.
- Lot of paperwork involved, hence less eco-friendly and time-consuming.
- Difficult for differently-abled voters to reach polling booth.
- Cost of expenditure on elections is high.

## Solution
Using Decentralized approach, voting process can be made more secure, transparent, immutable, and reliable. 

- We can use user voter id number as login credentials(Not implemented in MVP).
- For those who don't have internet availability, local centers can be constructed.


## Why to use

-  You can vote anytime/anywhere (During Pandemics like COVID-19 where it’s impossible to hold elections physically.
- Secure
- Immutable
- Faster
- Transparent
- As more users vote online more nodes will be added hence more secure.




# Run Locally

First make sure [Node](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) are installed in your system.


Clone the project


```bash
  git clone https://github.com/ThDevanshu/HackDefine.git
```

Then open project directory

## Start server

Go to the server directory

```bash
  cd Server
```

Install dependencies

```bash
  yarn install
```

Start the Server

```bash
  yarn run start
```

## Start client
Go to the client directory

```bash
  cd Client
```
First use the below command to create .env.local file and enter environment variable inside .env.local accordingly

```bash
  cp .env.sample .env.local
```

Install dependencies

```bash
  yarn install
```

Start the Client

```bash
  yarn run dev
```



# Tech Used

**Client:**  [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindui.com/), [Gun](https://gun.eco/)

**Server:** [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Gun](https://gun.eco/)
