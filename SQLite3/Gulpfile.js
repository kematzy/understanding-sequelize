(function () {
  'use strict';

  var gulp         = require('gulp');
  var gutil        = require('gulp-util');
  var notify       = require('gulp-notify');
  var plumber      = require('gulp-plumber');
  
  // var jshint       = require('gulp-jshint');
  // var stylish      = require('jshint-stylish');
  
  // var exec         = require('child_process').exec;
  // var sys          = require('sys');
  
  var mocha = require('gulp-mocha');
  
  gulp.task('test', function () {
    return gulp.src('test/*.test.js', {read: false})
      // .pipe(mocha({reporter: 'spec'}) )
      .pipe(plumber())
      .pipe( mocha({reporter: 'spec'}) )
      .pipe(plumber.stop())
      // .pipe(notify('Mocha Test Suite ran'))
  });
  
  // Keep an eye on Sass, Coffee, and PHP files for changes...
  gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['test']);
    gulp.watch('test/**/*.js', ['test']);
  });
  
  // What tasks does running gulp trigger?
  gulp.task('default', ['watch']);
  
  
  
  // // Handle jsHint compilation
  // gulp.task('jshint', function () {
  //   return gulp.src( jsDir + "/**/*.js" )
  //     .pipe(jshint())
  //     .pipe(jshint.reporter(stylish))
  //     .pipe(notify('jsHint reported'))
  // });
  
}());