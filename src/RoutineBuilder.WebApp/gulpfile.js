/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache'),
    order = require('gulp-order'),
    clean = require('gulp-clean'),
    templateCache = require('gulp-angular-templatecache');

var config = {
    paths: {
        appSource: 'app/',
        vendorSource: 'node_modules/',
        appBuild: '../RoutineBuilder.Api/app/'
    }
};

gulp.task('build', ['html', 'templates', 'images', 'vendor-js', 'vendor-css', 'app-js', 'app-css']);

gulp.task('clean', function () {
    return gulp
        .src(config.paths.appBuild)
        .pipe(clean({ force: true }));
});

gulp.task('html', function() {
    return gulp.src('Index.html', { cwd: config.paths.appSource })
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.paths.appBuild));
});

gulp.task('templates', function () {
    return gulp
        .src('templates/**/*.html', { cwd: config.paths.appSource })
        .pipe(minifyHTML())
        .pipe(templateCache('templates.min.js', { module: 'templates', standalone: true }))
        .pipe(gulp.dest('scripts/', { cwd: config.paths.appBuild }));
});

gulp.task('images', function () {
    return gulp.src('images/**/*.*', { cwd: config.paths.appSource })
        .pipe(gulp.dest('images/', { cwd: config.paths.appBuild }));
});

gulp.task('vendor-js', function () {
    return gulp.src([
            'angular/angular.js',
            'angular-animate/angular-animate.js',
            'angular-aria/angular-aria.js',
            'angular-material/angular-material.js',
            'angular-ui-router/release/angular-ui-router.js'
    ], { cwd: config.paths.vendorSource })
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('scripts/', { cwd: config.paths.appBuild }));
});

gulp.task('vendor-css', function () {
    return gulp.src('angular-material/angular-material.css', { cwd: config.paths.vendorSource })
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.css'))
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.appBuild + 'styles/'));
});

gulp.task('app-js', function () {
    return gulp.src('**/*.js', { cwd: config.paths.appSource })
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('scripts/', { cwd: config.paths.appBuild }));
});
gulp.task('app-css', function () {
    return gulp.src('**/*.css', { cwd: config.paths.appSource })
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.css'))
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.appBuild + 'styles/'));
});
