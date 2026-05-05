const path = require('node:path');
const webpack = require('webpack');
module.exports = {
  entry: './src/main/resources/static/index.js',
  output: {
      path: path.resolve(__dirname, 'src/main/resources/static/build'),
      filename: 'app.bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};