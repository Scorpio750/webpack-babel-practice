import gulp		from 'gulp'
import webpack	from 'webpack-stream'
import wpConfig	from './webpack.config.js'

gulp.task('webpack', () => {
	return gulp.src('./src/app.js')
				.pipe(webpack(wpConfig))
				.pipe(gulp.dest('./bin'))
})

gulp.task('default', ['webpack'], () => {

})
