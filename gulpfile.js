'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var devServer = require('./gulp/server');
var del = require('del');

var config = require('./gulp/config.json');
var paths = config.paths;

notify.logLevel(config.notifyLvl);

require('./gulp/assets');
require('./gulp/bundle.scripts');
require('./gulp/bundle.styles');

gulp.task('connect', function () {
    return devServer.server({
        root: ['client/build'],
        port: 8989,
        livereload: true
    });
});

gulp.task('clean', function () {
  return del([paths.buildDir]);
});

gulp.task('watch', ['connect'], function(){
  gulp.start('assets:copy');
  gulp.start('watch:scripts');
  gulp.start('watch:styles');
  gulp.start('watch:assets');
});

gulp.task('build', ['clean', 'assets:bower:install'], function () {
  gulp.start('assets:copy');
  gulp.start('bundle:styles');
  gulp.start('bundle:scripts');
});

gulp.task('default', ['connect', 'watch']);
