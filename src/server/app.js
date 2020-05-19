const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// storing the client id from the .env file to the process.env global object 
// if there's no .env file create one with inside -> CLIENT_ID=[your-spotify-client-id]
dotenv.config();

const whitelist = ['http://localhost:8080'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

// importing the router
const searchRouter = require('./routes/seach');
// setting a route for it
app.use('/search', searchRouter);

module.exports = app;