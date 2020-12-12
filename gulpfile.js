var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('styles',function(){
    return gulp.src('./app/assets/style/style.css')
    .pipe()
    .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch',function(){
    watch('./app/assets/style/style.css',function(){
        gulp.start('styles')
    });
}); 