const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
  // ENVs
  env: {
    API: 'http://localhost:3000',
  },
})