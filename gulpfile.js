const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const postcss = require("gulp-postcss");
const cleancss = require("gulp-clean-css");
const autoprefixer = require('autoprefixer');

function autoprefixerFunc(done){
  let preprocessors = [
    autoprefixer
  ]
  return gulp.src('./css/*.css')
    .pipe(postcss(preprocessors))
    .pipe(gulp.dest('./dist/tempCss'))
    done()
}

// Optimize Images - Minify
function imageMin(done){
	gulp.src('./img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'))
    done()
}

// Minify JS
function minifyJS(done){
  gulp.src('./js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
      done()
};

// Minify CSS
function minifyCSS(done){
  gulp.src('./dist/tempCss/*.css')
      .pipe(concat('main.css'))
      .pipe(cleancss())
      .pipe(gulp.dest('./dist/css'));
      done()
};

gulp.task("autoprefixerFunc", autoprefixerFunc)
gulp.task("imageMin", imageMin)
gulp.task("minifyJS", minifyJS)
gulp.task("minifyCSS", minifyCSS)
// Gulp will run all above tasks
gulp.task("default", gulp.series(autoprefixerFunc, imageMin, minifyJS, minifyCSS))

// Automatically update on save
gulp.task("watch", watchFiles)

function watchFiles(){
  gulp.watch('./img/*', imageMin);
  gulp.watch('./css/*.css', autoprefixerFunc);
  gulp.watch('./js/*.js', minifyJS);
  gulp.watch('./css/*.css', minifyCSS);
}
