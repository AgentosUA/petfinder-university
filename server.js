const http = require('http');
const app = require('./app');
const port = process.env.PORT || 1337;
const server = http.createServer(app);

server.listen(port);