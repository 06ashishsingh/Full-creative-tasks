// Initialization of modules

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss  = require('gulp-postcss');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');



// file path
const paths  = {

    styles : {
        src : 'scss/**/*.scss',
        dest : 'dist/styles/'
    },

    scripts : {
        src : 'src/**/*.js',
        dest : 'dist/script/'
    }
}

function styles(){

    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest));
}   

function scripts(){

    return gulp.src(paths.scripts.src)
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function watch(){
    gulp.watch(paths.scripts.src,scripts);
    gulp.watch(paths.styles.src,styles);
}


// default task

var build = gulp.series(
    gulp.parallel(styles,scripts),
    watch,
)

exports.default = build;

