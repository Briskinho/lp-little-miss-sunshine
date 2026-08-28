const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function style() {
    return gulp.src('./src/style/*.scss')
    .pipe(sass({style: 'compressed'}))
    .pipe(gulp.dest('./dist/style'));
}

function images() {
    return gulp.src('./src/images/**/*', {encoding: false})
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(style, images,);
exports.watch = function() {
    gulp.watch('./src/style/*.scss', gulp.parallel(style))
    gulp.watch('./src/scripts/*.js');
}