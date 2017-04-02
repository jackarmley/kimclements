const gulp = require('gulp'),
      connect = require('gulp-connect'),
      autoprefixer = require('gulp-autoprefixer'),
      watch = require('gulp-watch'),
      root = 'assets/',
      paths = {
        styles : 'styles/',
        scripts : 'scripts/'
      };

gulp.task('connect', function() {
  connect.server({
    port: 3000
  });
});

gulp.task('watch', function () {
    return watch(root + paths.styles + 'precompiled/**/*.css', {
      ignoreInitial: false
    }).pipe(gulp.dest(root + paths.styles));
});

gulp.task('styles', function() {
  gulp.src(root + paths.styles + 'precompiled/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(root + paths.styles))
});

gulp.task('default', ['connect','styles','watch']);
