/**
 * @module prod.config.js
 * @description Webpack Configuration for Production Environment
 */

const HTMLWebpack = require('html-webpack-plugin');
const path = require('path');

// HTML Webpack Plugin Configuration
const HTMLWebpackPlugin = new HTMLWebpack({
  template: path.resolve(__dirname, '../client/index.html'),
  filename: './index.html',
});

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../client/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../build'),        // Outbut bundle file to /build
    filename: 'bundle.js',                            // Bundle file name
    publicPath: '/',                                  // Specify base path for all assets as root
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader',],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']              // Auto resolve certain extensions
  },
  plugins: [HTMLWebpackPlugin],                       // Customize webpack build process
};
