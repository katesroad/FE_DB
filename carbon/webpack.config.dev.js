const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')

// For development enviroment
module.exports = merge(common, {
  mode: 'development',
  optimization: {
    minimize: false,
  },
  devServer: {
    historyApiFallback: true,
    /**
     * Enable visiting from another computer
     * doc: https://webpack.js.org/configuration/dev-server/#devserverhost
     */
    host: '0.0.0.0',
    port: '3000',
  },
})
