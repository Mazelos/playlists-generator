const getUserInfo = async (access_token) => {
  const option = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  }
  try {
    const userInfo = await fetch(`https://api.spotify.com/v1/me`, option);
    const jsonInfo = await userInfo.json();
    // console.log('user info from getUserInfo.js \n', jsonInfo)
    return jsonInfo
  } catch (err) {
    throw new Error('data not avaible')
    // console.log(`error occurred \n${err}`)
  }
}

export {getUserInfo}