const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv/config');

// Import routes:
const noteRoute = require('./routes/noteRoute');
const commentRoute = require('./routes/commentRoute');

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(cors());
server.use(express.json());

// Connect to the MongoDB:
mongoose
  .connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // Below is to remove this error: (node:1232) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    // Need to do a bit more research to see if any of the above are causing it or not.
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('DB error:', err));

if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
}

// Middleware for routes:
server.use('/test', commentRoute);
server.use('/note', noteRoute);

server.listen(port, () =>
  console.log(`Server successfully started, listening on port: ${port}.`)
);
