var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'scss/vendor/foundation',
  'scss/vendor/motion-ui'
];

gulp.task('sass', function() {
  return gulp.src('./scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
});
