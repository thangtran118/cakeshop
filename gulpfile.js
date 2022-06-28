const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const rename = require('gulp-rename');
const del = require("del");

/* Options
 * ------ */
const source = 'app'
const dist = 'public'
const options = {
    source: 'app',
    dist: 'public',
    views: {
        src: source + '/**/*.php',
        dest: dist,
    },
    scripts: {
        src: source + '/js/**/*.js',
        dest: dist + "/js"
    },
    images: {
        src: source + '/assets/images/**/*',
        dest: dist + "/assets/images"
    },
    fonts: {
        src: source + '/assets/fonts/**/*',
        dest: dist + "/assets/fonts"
    },
    styles: {
        all: source + '/scss/**/*.scss',
        src: source + '/scss/main.scss',
        dest: dist + "/css"
    },
};

/* Styles
 * ------ */
function styles() {
    return gulp
        .src(options.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false,
                grid: true
            })
        )
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(options.styles.dest))
}

/* Scripts
 * ------ */
function scripts() {
    return gulp
        .src(options.scripts.src)
        .pipe(babel())
        .pipe(uglify({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(gulp.dest(options.scripts.dest))
}

/* Images
 * ------ */

function images() {
    return gulp
        .src(options.images.src)
        .pipe(
            cache(
                imagemin({
                    interlaced: true
                })
            )
        )
        .pipe(gulp.dest(options.images.dest));
}

/* Font
 * ------ */

// create task fonts
function fonts() {
    return gulp
        .src(options.fonts.src)
        .pipe(gulp.dest(options.fonts.dest));
}

/* Views
 * ------ */
function views() {
    return gulp
        .src(options.views.src)
        .pipe(htmlmin({
            collapseWhitespace: true,
            ignoreCustomFragments: [/<\?[\s\S]*?(?:\?>|$)/]
        }))
        .pipe(gulp.dest(options.views.dest))
}

/* Clean up
 * ------ */

async function clean() {
    return Promise.resolve(del.sync([dist + '/css/**', dist + '/js/**', dist + '/assets/images/**', dist + '/assets/fonts/**', dist + '/*.php']));
}

function watchFiles() {
    gulp.watch(options.views.src, views);
    gulp.watch(options.styles.all, styles);
    gulp.watch(options.scripts.src, scripts);
}

/* Build
 * ------ */
const build = gulp.series(
    clean,
    gulp.parallel(styles, views, fonts, images, scripts)
);

// export tasks
exports.build = build;
exports.watch = watchFiles;
exports.default = build;