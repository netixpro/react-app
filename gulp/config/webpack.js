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
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: "style!css!sass?outputStyle=expanded&" +
        "includePaths[]=" +
        (path.resolve(__dirname, "./bower_components")) + "&" +
        "includePaths[]=" +
        (path.resolve(__dirname, "./node_modules"))
      },
      {test: /\.jsx$/, loader: 'jsx-loader?harmony', include: /material-ui/},
      {test: /\.jsx$/, loaders: ['react-hot-loader', '6to5-loader'], exclude: /node_modules/}
      ]
    }
  };
};
