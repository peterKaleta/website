'use strict';

var gulp = require('gulp');
var devServer = require('./server');
var bower = require('gulp-bower');
var gulpif = require('gulp-if');

var config = require('./config.json');
var paths = config.paths;
var isProduction = ( process.env.NODE_ENV === 'production' );

gulp.task('assets:copy', ['assets:copy:html', 'assets:copy:fonts', 'assets:copy:images']);

gulp.task('assets:copy:html', function () {
  return gulp.src(paths.clientDir + '/index.html')
  .pipe(gulp.dest(paths.buildClientDir))
  .pipe(gulpif(!isProduction, devServer.reload()));
});

gulp.task('assets:copy:images', function () {
  return gulp.src(paths.imagesDir + '/*.{jpg,png,gif,svg}')
  .pipe(gulp.dest(paths.imagesDest))
  .pipe(gulpif(!isProduction, devServer.reload()));
});

gulp.task('assets:copy:fonts', function () {
  return gulp.src(paths.bowerDir + '/fontawesome/fonts/*.{ttf,woff,eof,svg,eot}')
    .pipe(gulp.dest(paths.fontsDest));
});

gulp.task('assets:bower:install', function () {
  return bower();
});

gulp.task('watch:assets', ['assets:copy'], function () {
  gulp.watch(paths.clientDir + '/index.html', ['assets:copy:html']);
  gulp.watch(paths.imagesDir + '/*.svg', ['assets:copy:images']);
});
