const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');



const paths = {

    styles : {
        src : 'app/scss/**/*.scss',
        dest : 'dist/styles'
    },

    scripts : {
        src : 'app/scripts/**/*.js',
        dest : 'dist/scripts'
    }

}


function styles(){

    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(),cssnano()]))
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
    gulp.watch(paths.styles.src,styles);
    gulp.watch(paths.scripts.src,scripts);
}

// default task
var build = gulp.series(

    gulp.parallel(styles,scripts),
    watch

)

exports.default = build;