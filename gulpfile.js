var gulp = require('gulp'),
postcss = require('gulp-postcss'),
watch = require('gulp-watch'),
cssImport = require('postcss-import'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefixer = require('autoprefixer');


gulp.task('styles',function(){
    return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch',function(){
    watch('./app/assets/style/style.css',function(){
        gulp.start('styles')
    });
}); 