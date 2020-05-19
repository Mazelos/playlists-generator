const express = require('express');
const router = express.Router();
const searchResults = require('../data/searchResults');

router.get('/', (req, res, next) => {
  const term = req.query.name;
  const trackIndex = searchResults.findIndex(track => {
    return track.name == term
  });
  if (trackIndex == -1) {
    res.status(404).send();
  } else {
    res.send({
      result: [searchResults[trackIndex]]
    });
  }
});

module.exports = router;
