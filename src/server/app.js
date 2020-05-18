const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

app.get('/', (req, res) => {
  res.json({
    name: 'maza'
  })
})

module.exports = app;

