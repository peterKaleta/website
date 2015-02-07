'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var devServer = require('./gulp/server');
var del = require('del');

var config = require('./gulp/config.json');
var paths = config.paths;

notify.logLevel(config.notifyLvl);

require('./gulp/assets.copy');
require('./gulp/bundle.scripts');
require('./gulp/bundle.styles');

gulp.task('connect', devServer.server({
    root: ['client/build'],
    port: 8989,
    livereload: true
}));

gulp.task('clean', function () {
  del([paths.buildDir]);
});

gulp.task('watch', ['assets:copy', 'watch:scripts', 'watch:styles', 'watch:assets']);
gulp.task('build', ['assets:copy', 'bundle:styles', 'bundle:scripts']);
gulp.task('default', ['connect', 'watch']);
