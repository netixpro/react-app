'use strict';

module.exports = function (webpackConfig, paths) {
  var gulp = require('gulp'),
    path = require('path'),
    webpack = require('webpack'),
    runSequence = require('run-sequence'),
    WebpackDevServer = require('webpack-dev-server'),
    $ = require('gulp-load-plugins')();


  var server = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: paths.app,
    hot: true
  });

  return function () {
    server.listen(3000, "localhost", function (err) {
      if (err) throw new $.util.PluginError("webpack-dev-server", err);

      gulp.src(paths.dist + '/index.html')
        .pipe($.open('', {url: 'http://localhost:3000'}));

    });
  }
};
