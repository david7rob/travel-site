var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }

    });
    /*in the function, we leverage the gulp watch plug in - we can pass this 
    function 2 arguments 1st is the file on our computer that we want to watch for saved changes and 
    the 2nd argument is what we want it to actually do*/
    watch('./app/index.html', function(){
        browserSync.reload();
        
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    })

});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});