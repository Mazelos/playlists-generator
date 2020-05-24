const express = require('express');
const querystring = require('querystring');
const generateCookie = require('../util/cookie');
const router = express.Router();

const client_id = process.env.CLIENT_ID;
const redirect_uri = 'http://localhost:8888/auth';
const stateKey = 'spotify_auth_state';
const scope = 'user-read-private user-read-email';

router.get('/', (req, res) => {
  const cookie = generateCookie(16, stateKey);
  res.cookie(stateKey, cookie.state);
  //
  const queryOption = querystring.stringify({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: cookie.state
  });
  res.redirect(`https://accounts.spotify.com/authorize?${queryOption}`);
});

module.exports = router;
