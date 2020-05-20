const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

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

// importing the router
const search = require('./routers/seach');
// setting a route for it
app.use('/search', search);

app.get('/', (req, res) => {
  res.json({
    logged: 'boo'
  })
})

module.exports = app;