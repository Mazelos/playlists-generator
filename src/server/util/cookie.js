
const generateCookies = (length, stateKey) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let state = '';
  for (let i = 0; i < length; i++){
    state += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return {
    stateKey: stateKey,
    state: state
  }
}

module.exports = generateCookies