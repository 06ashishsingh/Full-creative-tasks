// Initialization of modules

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss  = require('gulp-postcss');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgmin = require('gulp-svgmin');
const spriteSmith = require('gulp.spritesmith');
const svgSprite = require("gulp-svg-sprite");



// file path
const paths  = {

    html : {
        src : 'app/**/*.html',
        dest: 'dist/'
    },

    styles : {
        src : 'app/scss/**/*.scss',
        dest : 'dist/styles/'
    },

    scripts : {
        src : 'app/scripts/**/*.js',
        dest : 'dist/script/'
    },

    images : {
        src : 'app/images/**/*',
        dest : 'dist/images/'
    },

    imagesWebp : {
        src : 'app/images/**/*.png',
        dest : 'dist/images/',
    },

    sprites : {
        src : 'app/images/**/*.png',
        dest: 'dist/images'
    }
}

const config = {

    mode: {
        symbol: {
          dest: '.',
          example: false,
          sprite: 'main.svg'
        },
    },
}

// config = {
//     mode: {
//       css: { // Activate the «css» mode
//         render: {
//           css: true // Activate CSS output (with default options)
//         }
//       }
//     }
// };

function sprites(){

    return gulp.src(paths.sprites.src)
        .pipe(spriteSmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }))
        .pipe(gulp.dest(paths.sprites.dest))
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

function minify(){

    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

function webpImage(){

    return gulp.src(paths.imagesWebp.src)
        .pipe(webp())
        .pipe(gulp.dest(paths.imagesWebp.dest));
}

function imageSprites(){

    return gulp.src(paths.sprites.src)
        .pipe(svgmin())
        .pipe(svgSprite(config))
        .pipe(gulp.dest(paths.sprites.dest));
}

function watch(){
    gulp.watch(paths.scripts.src,scripts);
    gulp.watch(paths.styles.src,styles);
}


// images
exports.minify = minify;
exports.webpImage = webpImage;
exports.imageSprites = imageSprites;
exports.sprites = sprites;

// default task
var build = gulp.series(
    gulp.parallel(styles,scripts),
    watch,
)

exports.default = build;

