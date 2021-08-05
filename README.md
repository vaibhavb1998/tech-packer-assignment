# Tech Packer

This is the assignment for the Techpacker, developed user React JS as client and Express JS, Node JS as backend

Check the demo application hosted on heroku [here](https://techpacker-filmstrip.herokuapp.com/).

## Instructions

First clone this repository.

```bash
git clone https://github.com/vaibhavb1998/tech-packer-assignment.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
npm install
```

```bash
cd client
npm install
```

Go to following config file

```bash
./client/src/config/index.js
```

and replace the line with this

```bash
export const BACKEND_URL = 'http://localhost:3001'
```

Finally, open two terminals and run these commands

First one to run backend server, in the root directory

```bash
npm start
```

Second to run client server, at client directory

```bash
cd client
npm start
```
