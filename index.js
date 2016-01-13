var gulp = require('gulp');
var shell = require('gulp-shell');
var Elixir = require('laravel-elixir');
var Task = Elixir.Task;

Elixir.extend('gitadd', function(path) {
    new Task('gitadd', function() {
        return gulp.src('').pipe(shell("git add --all "+path));
    });
});