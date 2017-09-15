const http = require('http');
const port = process.env.PORT || 8080;
const app = require('./lib/app');
require('./lib/setup-mongoose');
require('dotenv').config();

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server listening on port', server.address().port);
});