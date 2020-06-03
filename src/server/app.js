const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const app = express();

// storing the client id from the .env file to the process.env global object 
// if there's no .env file create one with inside -> CLIENT_ID=[your-spotify-client-id]
dotenv.config();

// option for the cors middleware
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
// set the middleware using the cors() method
app.use(cors(corsOptions));

// set the cookie midlleware
app.use(cookieParser());

// login middleware 
const login = require('./routers/login');
app.use('/login', login);

// authenticate middleware 
const auth = require('./routers/auth');
app.use('/auth', auth);


module.exports = app;