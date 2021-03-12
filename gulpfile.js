const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const fileinclude = require('gulp-file-include');
const outputDir  = './builds/';

function css() {
    return src('./src/sass/*.scss', { sourcemaps: false })
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCSS()) 
        .pipe(concat('app.css'))
        .pipe(dest('./builds/css'), { sourcemaps: false })
        .pipe(browserSync.stream()); 
}

function js() {
    return src('./src/js/app.js', { sourcemaps: false })
        .pipe(webpack({
            mode: 'production' 
        }))
        .pipe(concat('app.js')) 
        .pipe(dest('./builds/js/', { sourcemaps: false }));
}
 
function browser() {  
    browserSync.init({
        server: "builds"
    });

    watch('./src/sass/**/*.scss', css); 
    watch('./src/js/**/*.js', js).on('change', browserSync.reload);  
    watch('./src/html/**/*.html', fileInclude).on('change', browserSync.reload);  
}

function fileInclude() { 
    return src('./src/html/*.html')  
    .pipe(fileinclude())
    .pipe(dest(outputDir));    
}

exports.fileInclude = fileInclude;
exports.css = css;
exports.js = js;
exports.default = browser;