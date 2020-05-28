const getUserInfo = async (access_token) => {
  const option = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  }
  console.log('Called \'v1/me\'')
  const userInfo = await fetch(`https://api.spotify.com/v1/me`, option);
  const jsonInfo = await userInfo.json();
  if (!jsonInfo.error) {
    return jsonInfo
  } else {
    throw Error(`An error occurred with Status code: ${jsonInfo.error.status}\n${jsonInfo.error.message}`)
  }
}

export {getUserInfo}