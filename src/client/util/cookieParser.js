const regex = /([^&;= ]+)=?([^&;]*)/g

const cookieParser = (cookieString) => {
  let parsedCookie;
  const cookies = {};
  while (parsedCookie = regex.exec(cookieString)) {
    cookies[parsedCookie[1]] = parsedCookie[2];
  }
  return cookies
}

export {cookieParser}