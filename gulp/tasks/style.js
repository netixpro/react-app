module.exports = function (paths) {
  var gulp = require('gulp'),
  sass = require('gulp-sass');

  return function () {
    return gulp.src(paths.sass + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(paths.dist));
  };
};
