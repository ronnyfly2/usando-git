var gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	gutil = require('gulp-util'),
	browserSync = require('browser-sync'),	
	reload = browserSync.reload;

// Compile Jade

gulp.task('jade', function () {
    return gulp.src('jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream:true}));
});
// styles
gulp.task('stylus', function () {
	return gulp.src('stylus/*.styl')
	.pipe(stylus({use: [nib()]}))
	.pipe(gulp.dest('./css'))
	.pipe(reload({stream:true}));
});


// js
gulp.task('js', function () {
	return gulp.src('js/*js')
	.pipe(browserSync.reload({stream:true}));
});


// img
gulp.task('img', function () {
	return gulp.src('img/*')
	.pipe(browserSync.reload({stream:true}));
});


// start server
gulp.task('browser-sync', function() {
	browserSync.init(["*html"],{
		logLevel: "info",
		logConnections: true,
		notify: true,
		host: "localhost",
		port: 8000,
		open: true,
		//files: "app/css/*.css",	// BrowserSync can watch your files as you work
		server: {
			baseDir: "./" 			// Serve files
		}
	});
});


// refresh all browser
gulp.task('refresh', function () {
	browserSync.reload();
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('jade/*.jade', ['jade']);
  gulp.watch('stylus/*.styl', ['stylus']);
  gulp.watch("js/*", ['js']);
  gulp.watch("img/*", ['img']);
});