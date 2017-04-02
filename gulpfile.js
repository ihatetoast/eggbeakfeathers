const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', ()=>{
 gulp.src('style.css')
 	.pipe(autoprefixer())
 	.pipe(gulp.dest('build'))
});
gulp.task('watch', ()=>{
	gulp.watch('style.css', ['styles'])
});



