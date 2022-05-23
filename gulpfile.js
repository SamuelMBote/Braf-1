'use strict';
const { src, dest, series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function buildStyles() {
  return gulp
    .src('./css/scss/*.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

exports.buildStyles = buildStyles;

function watch() {
  gulp.watch('./css/scss/*.scss', buildStyles);
}

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
});

const start = gulp.series(buildStyles, watch);
exports.default = start;
