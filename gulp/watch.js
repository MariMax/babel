'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('modules', function() {
    browserify({
    entries: 'src/app/app.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('ready_app.js'))
    .pipe(gulp.dest('./dist/app'));
});


function browserSyncInit(baseDir, files, browser, baseFile) {
  browser = browser || 'default';
  baseFile = baseFile || '/index.html';

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir
    },
    browser: browser
  });

}

gulp.task('hint', function() {
    return gulp.src('src/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('copy-html', function(){
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
})

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'dist'
  ], [
    'dist/*.html',
    'dist/app/**/*.js',
    'dist/**/*.css'
  ]);
});

gulp.task('watch',['copy-html','modules'], function() {
    gulp.watch('src/app/**/*.js', ['hint', 'modules']);
    gulp.watch('src/**/*.html', ['copy-html']);
});
