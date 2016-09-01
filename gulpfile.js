var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: true
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
