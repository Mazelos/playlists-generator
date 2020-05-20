const express = require('express');
const querystring = require('querystring');
const fetch = require('node-fetch');
const request = require('request');
const axios = require('axios');

const router = express.Router();

const client_id = process.env.CLIENT_ID;
const secret_id = process.env.SECRET_ID;
const redirect_uri = 'http://localhost:8888/auth'
const stateKey = 'spotify_auth_state';

router.get('/', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;
  //
  if (state === null || state !== storedState) {
    res.redirect(`/#${querystring.stringify({ error: 'state_mismatch' })}`);
    return;
  }
  //
  res.clearCookie(stateKey);
  //
  const body = {
    code: code,
    redirect_uri: redirect_uri,
    grant_type: 'authorization_code'
  }
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${client_id}:${secret_id}`).toString('base64')}`
    }
  }
  axios.post('https://accounts.spotify.com/api/token', querystring.stringify(body), config)
    .then((response) => {
      res.clearCookie('access_token');
      res.clearCookie('refresh_token');
      res.cookie('access_token', response.data.access_token);
      res.cookie('refresh_token', response.data.refresh_token);
      res.redirect('/')
    })
    .catch((error) => {
      console.log(`🚨ERROR🚨\n» error-code: ${error.response.status}\n» error-message: ${error.response.statusText}\n» ${error.response.headers.date}`);
    })
});

module.exports = router;