const { PORT } = require('./config/local.json');

module.exports = {
  apps: [{
    name: "petfinder-app",
    script: `npm --name "petfinder-dev" --watch -- start -- -p ${PORT || 2000}`
  }]
}