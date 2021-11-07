const { PORT } = require('./config/local.json');

module.exports = {
  apps: [{
    name: "petfinder-app",
    watch: true,
    script: "npm",
    node_args: `start -- -p ${PORT || 4000}`
  }]
}