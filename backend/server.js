const http = require('http');
const PORT = process.env.port || 3000;
const app = require('app');

const server = http.createServer(app);

server.listen(PORT);
