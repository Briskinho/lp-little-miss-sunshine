const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function style() {
    return gulp.src('./src/style/*.scss')
    .pipe(sass({style: 'compressed'}))
    .pipe(gulp.dest('./dist/style'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(style, images, scripts);
exports.watch = function() {
    gulp.watch('./src/style/*.scss', gulp.parallel(style))
    gulp.watch('./src/scripts/*.js');
}