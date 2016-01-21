﻿/*
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
    clean = require('gulp-clean');

var config = {
    paths: {
        appSource: './app',
        vendorSource: './node_modules',
        appBuild: '../RoutineBuilder.Api/app'
    }
};

gulp.task('build', ['html', 'images', 'vendor-js', 'vendor-css', 'app-js']);

gulp.task('clean', function () {
    return gulp
        .src(config.paths.appBuild)
        .pipe(clean({ force: true }));
});

gulp.task('html', function() {
    return gulp.src(config.paths.appSource + '/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.paths.appBuild));
});

gulp.task('images', function () {
    return gulp.src(config.paths.appSource + '/images/**/*.*')
        .pipe(gulp.dest(config.paths.appBuild + '/images'));
});

gulp.task('vendor-js', function () {
    return gulp.src([
            '/angular/angular.js',
            '/angular-animate/angular-animate.js',
            '/angular-aria/angular-aria.js',
            '/angular-material/angular-material.js'
    ], { base: config.paths.vendorSource })
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.appBuild));
});

gulp.task('vendor-css', function () {
    return gulp.src(config.paths.vendorSource + '/angular-material/angular-material.css')
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.css'))
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.appBuild));
});

gulp.task('app-js', function () {
    return gulp.src(config.paths.appSource + '/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.appBuild));
});