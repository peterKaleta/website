'use strict';

var gulp = require('gulp');
var devServer = require('./server');

var config = require('./config.json');
var paths = config.paths;

gulp.task('assets:copy', ['assets:copy:html', 'assets:copy:fonts', 'assets:copy:images']);

gulp.task('assets:copy:html', function () {
  gulp.src(paths.clientDir + '/index.html')
  .pipe(gulp.dest(paths.buildDir))
  .pipe(devServer.reload());
});

gulp.task('assets:copy:images', function () {
  gulp.src(paths.imagesDir + '/*.{jpg,png,gif,svg}')
  .pipe(gulp.dest(paths.imagesDest))
  .pipe(devServer.reload());
});

gulp.task('assets:copy:fonts', function () {
  gulp.src(paths.bowerDir + '/fontawesome/fonts/*.{ttf,woff,eof,svg,eot}')
    .pipe(gulp.dest(paths.fontsDest));
});

gulp.task('watch:assets', ['assets:copy'], function () {
  gulp.watch(paths.clientDir + '/index.html', ['assets:copy:html']);
  gulp.watch(paths.imagesDir + '/*.svg', ['assets:copy:images']);
});
