'use strict';

var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  del = require('del'),
  path = require('path');

var projectRoot = path.join(__dirname, '..');
var paths = {
  app: path.join(projectRoot, 'app'),
  dist: path.join(projectRoot, 'dist'),
  sass: path.join(projectRoot, 'app/sass')
};
var webpackConfig = require('./config/webpack.js')(paths);

global.dist = paths.dist;

gulp.task('clean', del.bind(null, [paths.dist]));

gulp.task('build', ['clean'], function (cb) {
  runSequence(['style', 'pages', 'pack', 'serve'], cb);
});

gulp.task('default', [], function (cb) {
  runSequence(['serve'], cb);
});

gulp.task('style', require('./tasks/style')(paths));
gulp.task('pages', require('./tasks/pages')(paths));
gulp.task('pack', require('./tasks/pack')(webpackConfig, paths));
gulp.task('serve', require('./tasks/serve')(webpackConfig, paths));
