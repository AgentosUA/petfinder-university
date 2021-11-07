const { PORT } = require('./config/local.json');

module.exports = {
  apps: [{
    name: "petfinder-app",
    watch: true,
    script: './node_modules/.bin/next',
    node_args: `start -p ${PORT || 4000}`
  }]
}