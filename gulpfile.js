//tarefas em serie
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImages(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}

function comprimeJavascript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}
//tarefas com sass
function complilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}





//executando tarefas em series
// exports.default = gulp.series(funcaoPadrao, dizOi)


//executando tarefas em paralelo




exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(complilaSass))
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false}, gulp.series(comprimeJavascript))
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(comprimeImages))
}


// tarefas publicas sao as que exportamos comandoe chamamos via linha de 
//tarefas privadas sao funcao javascript que sera chamada atraves de outra funcao 