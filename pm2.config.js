const { PORT } = require('./config/config.json');

module.exports = {
  apps: [{
    name: "app-dev",
    watch: true,
    script: './node_modules/next/bin/next',
    node_args: `start -p ${PORT || 4000}`
  }]
}