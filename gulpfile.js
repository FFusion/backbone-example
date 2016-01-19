var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('build-js', function() {
    return gulp.src('backbone/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('default', ['build-js']);


