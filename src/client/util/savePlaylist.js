// call to the spotify Api to create a named playlist with a given array of songs uri
const savePlaylist = async (accessToken, userId, playlistName, tracksUri) => {
  // first create some common option for the two calls 
  const options = {
    headers: { Authorization: `Bearer ${accessToken}` }
  }
  
  // we check if the playlist already exists by the name provided 
  // make a get to obtain all the playlist saved in the user's library 
  options.method = 'GET';
  const playlistGetResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, options);
  const savedPlaylists = await playlistGetResponse.json();
  // loop in the playlists to find if the one we want to create already exists 
  let playlistId = '';
  savedPlaylists.items.forEach(playlist => {
    if (playlist.name === playlistName) {
      playlistId = playlist.id;
      return
    }
  });

  // we set the method to post
  options.method = 'POST';

  // if the playlist already exist we skip this step 
  if (playlistId === '') {
    options.body = JSON.stringify({ name: playlistName });
    const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, options);
    const playlist = await playlistResponse.json();
    playlistId = playlist.id;
  }
  
  // post the songs array to the playlist 
  // we need just the uris from the song array
  options.body = JSON.stringify({ uris: tracksUri });
  const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, options);

  // if the status code is not 201 or something else went wrong we throw an error 
  if (response.ok === false || response.status !== 201) {
    throw Error(`An error occurred with status code : ${response.status}`)
  }
}

export { savePlaylist }