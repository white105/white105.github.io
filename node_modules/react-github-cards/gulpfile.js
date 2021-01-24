'use strict';

const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const del = require('del');
const webpack = require('webpack-stream');

gulp.task('clean', () => {
  return del(['gh-pages'], {dot: true});
});

gulp.task('copy', ['clean'], () => {
  return gulp.src('./example/index.html')
    .pipe(gulp.dest('./gh-pages'));
});

gulp.task('build', ['clean', 'copy'], () => {
  return gulp.src('./example/index.js')
    .pipe(webpack(require('./webpack.config.gh-page.js')))
    .pipe(gulp.dest('./gh-pages'));
});

gulp.task('depoly', ['clean', 'clean', 'copy', 'build'], () => {
  return gulp.src('./gh-pages/*')
    .pipe(ghPages());
});

