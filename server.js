const app = require('./src/server/app');
const dotenv = require('dotenv');

// storing the client id from the .env file to the process.env global object 
// if there's no .env file create one with inside -> CLIENT_ID=[your-spotify-client-id]
dotenv.config();

const PORT = process.env.PORT || 8888;
app.listen(PORT);