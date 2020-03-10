const express = require('express');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 3525;

server.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

server.listen(port, () =>
  console.log(`Server successfully started, listening on port: ${port}.`)
);
