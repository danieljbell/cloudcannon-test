var gulp          = require('gulp'),
    postcss       = require('gulp-postcss'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    atImport      = require('postcss-import'),
    autoprefixer  = require('autoprefixer'),
    mqpacker      = require('css-mqpacker'),
    cssnano       = require('cssnano'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    pump          = require('pump'),
    browserSync   = require('browser-sync');

gulp.task('css', function () {
  var processors = [
    atImport,
    autoprefixer({browsers: ['last 6 versions']}),
    mqpacker,
    cssnano
  ];
  return gulp.src('_src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});


gulp.task('watch', function() {
  gulp.watch('_src/scss/**/*.scss', ['css']);
  gulp.watch('_src/js/**/*.js', ['js']);
});

gulp.task('js', function () {
  gulp.src([
        'node_modules/waypoints/lib/noframework.waypoints.min.js',
        'node_modules/waypoints/lib/shortcuts/inview.js',
        '_src/js/site-header.js',
        '_src/js/home.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});


// gulp.task('default', ['watch', 'browser-sync']);
gulp.task('default', ['css', 'js', 'watch']);
