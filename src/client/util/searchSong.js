
const search = async (accessToken, term) => {
  const options = {
    headers: { Authorization: `Bearer ${accessToken}` }
  }

  const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, options);
  const jsonResponse = await response.json();

  if (!jsonResponse.tracks) {
    return []
  }
  const songArray = jsonResponse.tracks.items.map(track => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    uri: track.uri
  }));
  return songArray
}

export { search }