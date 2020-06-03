const app = require('./src/server/app');

const PORT = process.env.PORT || 8888;
app.listen(PORT);