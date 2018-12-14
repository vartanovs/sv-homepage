/**
 * @module dev.config.js
 * @description Webpack Configuration for Development Environment
 */

const HTMLWebpack = require('html-webpack-plugin');
const path = require('path');

// HTML Webpack Plugin Configuration
const HTMLWebpackPlugin = new HTMLWebpack({
  template: path.resolve(__dirname, '../client/index.html'),
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../client/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../build'),        // Outbut bundle file to /build
    filename: 'bundle.js',                            // Bundle file name
    publicPath: '/',                                  // Specify base path for all assets as root
  },
  devServer: {
    compress: true,                                   // GZIP Compression
    contentBase: path.resolve(__dirname, '../build'), // Serve static files from /build
    historyApiFallback: true,                         // Redirect 404s to /index.html
    proxy: {
      '/api': {
        target: 'http://localhost:3000',              // Proxy :8080/api requests to 3000
      },
    },
    port: 8080,                                       // Specify PORT for requests
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
  plugins: [HTMLWebPackPlugin],                       // Customize webpack build process
};
