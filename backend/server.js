require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const port = 5000;
const server = http.createServer(app);

mongoose
  .connect(
    'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then((result) => {
    console.log('Connected to DB');
    server.listen(port);
    console.log('Server started!');
  })
  .catch((err) => console.log(err));
