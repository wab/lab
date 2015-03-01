/*global -$ */
'use strict';
// generated on 2015-02-28 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function () {
  return gulp.src('styles/main.less')
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.sourcemaps.init())
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('styles'))
    .pipe(reload({stream: true}));
});

gulp.task('jshint', function () {
  return gulp.src('scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});


gulp.task('serve', ['styles'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [''],
      routes: {
        '/bower_components': '../bower_components'
      }
    }
  });

  // watch for changes
  gulp.watch([
    '*.html',
    'styles/main.css',
    'scripts/**/*.js',
    'images/**/*'
  ]).on('change', reload);

  gulp.watch('styles/**/*.less', ['styles']);
  gulp.watch('fonts/**/*', ['fonts']);
});


gulp.task('default', function () {
  gulp.start('serve');
});
