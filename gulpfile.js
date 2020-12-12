const GulpClient = require("gulp")
var anything = require("gulp"),
watch = require('gulp-watch');

anything.task('default', function(){
    console.log('we create a gulp file');
});

GulpClient.task('html',function(){
    console.log('this is another gulp ttask we defined to run or execute with gulpl cmd');
});
GulpClient.task('styles', function(){
    console.log('imagein thisn is the other file of css');
})
GulpClient.task('watch' , function(){
    watch('./app/index.html' , function(){
        gulp.start('html');
    });
    watch('./app/assets/style/**/*.css',function(){
        gulp.start('style')
    })
});