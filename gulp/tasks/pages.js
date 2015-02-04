module.exports = function(paths) {


  var gulp = require('gulp');

  return function() {
    gulp.src(['app/*.html'])
    .pipe(gulp.dest(paths.dist));
  };
};
