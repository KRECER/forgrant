var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var posthtml = require('gulp-posthtml');
var include = require('posthtml-include');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');
var rename = require('gulp-rename');
var server = require('browser-sync').create();
var run = require('run-sequence');
var del = require("del");
var sassGlob = require('gulp-sass-glob');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cheerio = require('gulp-cheerio');
var ghPages = require('gulp-gh-pages');

gulp.task("serve", function () {
	server.init({
		server: {
			baseDir: "build/"
		}
	});

	gulp.watch("source/scss/**/*.scss", ["style"]);
	gulp.watch("source/*.html", ["html"]);
	gulp.watch("source/js/*.js", ["script"]);
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task("copy", function () {
	return gulp.src(["source/fonts/**/*.{woff,woff2}", "source/img/**"], {
			base: "source"
		})
		.pipe(gulp.dest("build"));
});

gulp.task("images", function () {
	return gulp.src("source/img/**/*.{png,jpg,svg}")
		.pipe(imagemin([
			imagemin.optipng({
				optimizationLevel: 3
			}),
			imagemin.jpegtran({
				progressive: true
			}),
			imagemin.svgo()
		]))
		.pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
	return gulp.src("source/img/**/*.{png,jpg}")
		.pipe(webp({quality: 90}))
		.pipe(gulp.dest("source/img"));
});

gulp.task('style', function () {
	gulp.src('source/scss/style.scss')
		.pipe(plumber())
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest('build/css'))
		.pipe(minify())
		.pipe(rename('style-min.css'))
		.pipe(gulp.dest('build/css'))
		.pipe(server.stream());
});

gulp.task('script', function () {
	return gulp.src('source/js/*.js')
	  .pipe(gulp.dest('build/js'))
		.pipe(uglify())
		.pipe(rename('main-min.js'))
		.pipe(gulp.dest('build/js'))
		.pipe(server.stream());
});

gulp.task("sprite", function () {
	return gulp.src("source/img/**/icon-*.svg")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
	return gulp.src("source/*.html")
		.pipe(posthtml([include()]))
		.pipe(gulp.dest("build"))
		.pipe(server.stream());
});

gulp.task("clean", function () {
	return del("build");
});

gulp.task("build", function (done) {
	run("clean", "copy", "style", "sprite", "html", "script", done);
});