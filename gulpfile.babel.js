import gulp		from 'gulp'
import run		from 'gulp-run'
import webpack	from 'webpack-stream'
import wpConfig	from './webpack.config.js'

gulp.task('webpack', () => {
	return gulp.src('./src/app.js')
				.pipe(webpack(wpConfig))
				.pipe(gulp.dest('./bin'))
})

gulp.task('default', ['webpack'], () => {
	run('node bin/app.bundle.js').exec()
})
