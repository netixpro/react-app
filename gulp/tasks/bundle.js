module.exports = function (watch, verbose) {
  var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    webpack = require('webpack');

  return function (cb) {
    var started = false;
    var config = require('../config/webpack.js')();
    var bundler = webpack(config);

    function bundle(err, stats) {
      if (err) {
        throw new $.util.PluginError('webpack', err);
      }

      if (verbose) {
        $.util.log('[webpack]', stats.toString({
          colors: true
        }));
      }

      if (!started) {
        started = true;
        return cb();
      }
    }

    if (watch) {
      bundler.watch(200, bundle);
    } else {
      bundler.run(bundle);
    }
  }
}
