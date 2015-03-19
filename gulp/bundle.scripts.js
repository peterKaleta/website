'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-size');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var plumber = require('gulp-plumber');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

var config = require('./config.json');
var paths = config.paths;
var isProduction = ( process.env.NODE_ENV === 'production' );

var devServer = require('./server');

var bundler = browserify({
  entries: [paths.appDir + '/app.jsx'],
  transform: [reactify, babelify],
  debug: !isProduction,
  cache: {},
  packageCache: {},
  fullPaths: true
});

gulp.task('bundle:scripts:server', function () {
  return gulp.src(paths.serverDir + '/**/*.es6')
        .pipe(babel())
        .pipe(rename({
          extname: '.js'
        }))
        .pipe(gulp.dest(paths.buildServerDir));
});

gulp.task('bundle:scripts:client', function () {

  return bundler.bundle()
    .on('error', function () {
      gutil.log(arguments);
      this.emit('end');
    })
    .pipe(source('main.js'))
    .pipe(plumber())
    .pipe(buffer())
    .pipe(gulpif(!isProduction, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(isProduction, uglify() ))
    .pipe(gulpif(!isProduction, sourcemaps.write('./')))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(paths.scriptsDest))
    .pipe(gulpif(!isProduction, devServer.reload()));

});

gulp.task('bundle:scripts', ['bundle:scripts:server', 'bundle:scripts:client']);

gulp.task('watch:scripts', function () {

  bundler = watchify(bundler);

  bundler.on('update', function () {
    gulp.start('bundle:scripts:client');
  });

  gulp.start('bundle:scripts:client');

  gulp.watch(paths.serverDir + '/**/*.es6', ['bundle:scripts:server']);

});
