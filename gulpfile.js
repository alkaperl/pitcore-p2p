'use strict';

var gulp = require('gulp');
var pitcoreTasks = require('pitcore-build');

pitcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
