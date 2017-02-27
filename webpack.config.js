const path = require('path');
const nodeModulesDir = path.join(__dirname, 'node_modules');
const WebpackNotifierPlugin = require('webpack-notifier');

require('babel-preset-es2015');
require('babel-preset-react');

const config = {
  entry: './src/form-for.jsx',
  output: {
    filename: 'form-for.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  module: {
    noParse: [nodeModulesDir],
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel',
        exclude: [nodeModulesDir]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  }
};

module.exports = config;
