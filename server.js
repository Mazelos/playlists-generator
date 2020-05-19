const cors = require('cors');
const app = require('./src/server/app');


const PORT = process.env.PORT || 3000;
app.listen(PORT);