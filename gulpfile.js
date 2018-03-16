//referenties leggen naar de tools (die geinstalleerd zijn)
let gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require("gulp-clean-css"),
    csslint = require("gulp-csslint"),
    jshint = require("gulp-jshint"),
    jsStylish = require("jshint-stylish"),
    uglify = require("gulp-uglify"),
    notify = require("gulp-notify"),
    concat = require("gulp-concat");

const PATHS = {
    HTML : {
        SRC : './src/*.html',
        DIST: './dist/'
    },
    JS: {
        SRC : './src/js/**/*.js',
        DIST: './dist/js/'
    },
    CSS: {
        SRC : './src/css/**/*.css',
        DIST: './dist/css/'
    }
};
// /**/ betekent => NEEM OOK NOG SUBMAPPEN MEE

gulp.task("default", function(){
    //watch
    let htmlwatcher = gulp.watch(PATHS.HTML.SRC, ['copy-html'])
    htmlwatcher.on("change", function(){
        console.log("File " + event.path + " was " + event.type);
    });

    gulp.watch(PATHS.JS.SRC, ['js']);
    gulp.watch(PATHS.CSS.SRC, ['css']);
});

gulp.task("js", function(){
    gulp.src(PATHS.JS.SRC)
        .pipe(concat("app.js"))
        .pipe(gulp.dest(PATHS.JS.DIST));
});

gulp.task("css", function(){
    gulp.src(PATHS.CSS.SRC)
        .pipe(concat("app.css"))
        .pipe(gulp.dest(PATHS.CSS.DIST));
});

gulp.task("copy-html", function(){
    gulp.src(PATHS.HTML.SRC)
        .pipe(gulp.dest(PATHS.HTML.DIST));
});