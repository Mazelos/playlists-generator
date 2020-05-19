const { uuid } = require('uuidv4');

const searchResults = [
  {
    id: uuid(),
    name: 'Crazy',
    artist: 'Gnarls Barkley',
    album: 'St. Elsewhere'
  },
  {
    id: uuid(),
    name: 'Myth',
    artist: 'Beach House',
    album: 'Bloom'
  },
  {
    id: uuid(),
    name: 'Crystalised',
    artist: 'The xx',
    album: 'xx'
  },
  {
    id: uuid(),
    name: 'A New Error',
    artist: 'Moderat',
    album: 'Moderat'
  },
  {
    id: uuid(),
    name: 'Stolen Dance',
    artist: 'Milky Chance',
    album: 'Sadnecessary'
  }
]

module.exports = searchResults;
