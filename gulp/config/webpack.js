'use strict';

var webpack = require('webpack'),
path = require('path');

module.exports = function (paths) {
  return {
    cache: false,
    entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './app/index.jsx'
    ],

    output: {
      path: paths.app,
      filename: 'bundle.js'
    },

    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    ],

    devtool: 'eval',

    stats: {
      colors: true,
      reasons: true
    },

    resolve: {
      // Allow to omit extensions when requiring these files
      extensions: ['', '.js', '.jsx']
    },

    module: {
      noParse: [/gulp/],
      loaders: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:[' +
          '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
          '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}'
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:[' +
          '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
          '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}!less-loader'
        },
        {
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        },
        {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        },
        {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        },
        {
          test: /\.jsx?$/,
          loader: 'jsx-loader?harmony&stripTypes'
        },
        {
          test: /\.jsx$/,
          loaders: ['react-hot-loader', '6to5-loader'],
          exclude: /node_modules/
        },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      ]
    }
  };
};
