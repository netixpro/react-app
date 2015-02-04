module.exports = function (paths) {
  var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

  return function() {
    return gulp.src(paths.app)
      .pipe($.webpack(webpackConfig))
      .pipe(gulp.dest(paths.dist));
  }
};
