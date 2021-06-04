const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')

// For application building using webpack
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
})
