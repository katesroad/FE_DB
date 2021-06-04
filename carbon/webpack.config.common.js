const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const webpack = require('webpack')

// For shared webpack config between production and development enviroment
module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    /**
     * Setup alias for components, styles, context and hooks folder
     * Doc: https://webpack.js.org/configuration/resolve/#resolvealias
     */
    alias: {
      components: path.resolve(__dirname, './src', 'components'),
      constant: path.resolve(__dirname, './src', 'constant'),
      context: path.resolve(__dirname, './src', 'context'),
      hooks: path.resolve(__dirname, './src', 'hooks'),
      interfaces: path.resolve(__dirname, './src', 'interfaces'),
      styles: path.resolve(__dirname, './src', 'styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
}
