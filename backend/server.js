require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

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
    server.listen(process.env.PORT);
    console.log('Server started on port ' + process.env.PORT);
  })
  .catch((err) => console.log('Server failed to start. Maybe .env file is missing? \n'));
