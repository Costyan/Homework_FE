const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
  return gulp.src('src/script.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('js'));
});

gulp.task('babel:watch', function () {
  gulp.watch('src/script.js', ['babel']);
});
