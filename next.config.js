const withImages = require('next-images')
const envs = require('./config/local.json');
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  pageExtensions: ['index.page.tsx', 'page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  webpack(config, options) {
    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
  // ENVs
  env: envs ? { ...envs } : {},
})