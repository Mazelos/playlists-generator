const getUserInfo = async (access_token) => {
  const option = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  }
  const userInfo = await fetch(`https://api.spotify.com/v1/me`, option);
  const jsonInfo = await userInfo.json();
  if (!jsonInfo.error) {
    return jsonInfo
  } else {
    throw Error(jsonInfo.error.status)
  }
}

export {getUserInfo}