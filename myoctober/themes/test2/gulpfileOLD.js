/**
 * Created by Olaf Broms on 7/6/2016.
 */
var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    gutil        = require('gulp-util'),
    autoprefixer = require('autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    postcss      = require('gulp-postcss'),
    poststylus   = require('poststylus'),
    stylus       = require('gulp-stylus'),
    axis         = require('axis'),
    rupture      = require('rupture'),
    lost         = require('lost'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync({
        files: [ // Directories of your OctoberCMS files, HTML/TXT/JS... etc
            'content/*.htm',
            'content/static-pages/*.htm',
            'content/placeholder/*.txt',
            'layouts/*.htm',
            'pages/*.htm',
            'partials/*.htm',
            'assets/javascript/*.js'
       ],

        proxy: {
            target: "october3/" // Enter your dev environment proxy
        }
    });
    gulp.watch('assets/css/stylus/*.styl', ['stylus']).on('change', reload); // Watches all Stylus files for changes
    gulp.watch('assets/oct/src/assets/scss/app.scss').on('change', reload); //watch foundation scss
});

gulp.task('stylus', function() {
    gulp.src('assets/css/stylus/main.styl') // Compiles main.styl ... intended for a manifest file ie: http://sassdirector.com/examples/index.html (using Sass examples)
        .pipe(plumber({errorHandler: function (err) { gutil.beep(); console.log(err);}}))
        .pipe(stylus({
            use: [
                poststylus([
                    'autoprefixer',
                    'lost'
                ]),
                axis(),
                rupture()
            ]
        }))
        .pipe(gulp.dest('assets/css/')) // Compile everything into one file, main.css
});

gulp.task('default', ['browser-sync']);