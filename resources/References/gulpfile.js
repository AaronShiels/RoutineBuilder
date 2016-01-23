,
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    uncss = require('gulp-uncss'),
    sourcemaps = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),
    glob = require('glob'),
    templateCache = require('gulp-angular-templatecache'),
    browserSync = require('browser-sync'),
    order = require('gulp-order'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace');

var config = {
    paths: {
        templates: {
            src: ['src/app/templates/**/*.html'],
            dest: 'build/js'
        },
        html: {
            src: ['src/index.html'],
            dest: 'build'
        },
        vendorjs: {
            src: ['src/vendor/js/**/*.js'],
            dest: 'build/js'
        },
        appjs: {
            src: ['src/app/js/**/*.js'],
            dest: 'build/js'
        },
        configdebugjs: {
            src: ['src/config/app.config.debug.js'],
            dest: 'build/js'
        },
        configreleasejs: {
            src: ['src/config/app.config.release.js'],
            dest: 'build/js'
        },
        vendorcss: {
            src: ['src/vendor/css/**/*.css'],
            dest: 'build/css'
        },
        appcss: {
            src: ['src/app/css/**/*.css'],
            dest: 'build/css'
        },
        images: {
            src: ['src/app/img/**/*.jpg', 'src/app/img/**/*.jpeg', 'src/app/img/**/*.png'],
            dest: 'build/img'
        },
        fonts: {
            src: ['src/vendor/fonts/**/*'],
            dest: 'build/fonts'
        }
    }
};

gulp.task('clean', function () {
    return gulp
        .src('build')
        .pipe(clean({ force: true }));
});

gulp.task('templates', function () {
    return gulp
        .src(config.paths.templates.src)
        .pipe(minifyHTML())
        .pipe(templateCache('templates.min.js', { module: 'templates', standalone: true }))
        .pipe(gulp.dest(config.paths.templates.dest));
});

gulp.task('html', function() {
    return gulp.src(config.paths.html.src)
        .pipe(minifyHTML())
        .pipe(gulp.dest(config.paths.html.dest));
});

gulp.task('images', function () {
    return gulp.src(config.paths.images.src)
        .pipe(gulp.dest(config.paths.images.dest));
});

gulp.task('fonts', function () {
    return gulp.src(config.paths.fonts.src)
        .pipe(gulp.dest(config.paths.fonts.dest));
});

gulp.task('vendor-js', function () {
    return gulp.src(config.paths.vendorjs.src)
        .pipe(sourcemaps.init())
        .pipe(order([
            'src/vendor/js/angular.js',
            'src/vendor/js/ionic.js'
        ], { base: '.' }))
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.vendorjs.dest));
});

gulp.task('app-js', function () {
    return gulp.src(config.paths.appjs.src)
        .pipe(sourcemaps.init())
        .pipe(order(['src/app/js/app.js'], { base: '.' }))
        .pipe(concat('app.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.appjs.dest));
});

gulp.task('config-debug-js', function () {
    return gulp.src(config.paths.configdebugjs.src)
        .pipe(sourcemaps.init())
        .pipe(concat('app.config.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.configdebugjs.dest));
});

gulp.task('config-release-js', function () {
    return gulp.src(config.paths.configreleasejs.src)
        .pipe(sourcemaps.init())
        .pipe(concat('app.config.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.configreleasejs.dest));
});

gulp.task('vendor-css', function () {
    return gulp.src(config.paths.vendorcss.src)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.css'))
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.vendorcss.dest));
});

gulp.task('app-css', function () {
    return gulp.src(config.paths.appcss.src)
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.css'))
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.appcss.dest));
});

gulp.task('build-debug', ['html', 'vendor-js', 'app-js', 'config-debug-js', 'templates', 'vendor-css', 'app-css', 'images', 'fonts']);

gulp.task('build-release', ['html', 'vendor-js', 'app-js', 'config-release-js', 'templates', 'vendor-css', 'app-css', 'images', 'fonts']);

gulp.task('appbuilder-transfer', ['build-release'], function () {
    return gulp.src('build/**/*')
       .pipe(gulp.dest('../HappyHour.AppBuilder'));
});

gulp.task('inject-cordova-js', ['appbuilder-transfer'], function () {
    return gulp.src('../HappyHour.AppBuilder/*.html')
        .pipe(replace('</body>', '<script type=text/javascript src=cordova.js></script></body>')) //.pipe(inject(gulp.src('../HappyHour.AppBuilder/cordova.js/*.js', {read: false}))) 
        .pipe(gulp.dest('../HappyHour.AppBuilder'));
});

gulp.task('rename-abignore', ['appbuilder-transfer'], function () {
    return gulp.src('../HappyHour.AppBuilder/.abignore')
        .pipe(rename('z.abignore'))
        .pipe(gulp.dest('../HappyHour.AppBuilder'));
});

gulp.task('rename-abproject', ['appbuilder-transfer'], function () {
    return gulp.src('../HappyHour.AppBuilder/.abproject')
        .pipe(rename('z.abproject'))
        .pipe(gulp.dest('../HappyHour.AppBuilder'));
});

gulp.task('rename-debug-abproject', ['appbuilder-transfer'], function () {
    return gulp.src('../HappyHour.AppBuilder/.debug.abproject')
        .pipe(rename('z.debug.abproject'))
        .pipe(gulp.dest('../HappyHour.AppBuilder'));
});

gulp.task('rename-release-abproject', ['appbuilder-transfer'], function () {
    return gulp.src('../HappyHour.AppBuilder/.release.abproject')
        .pipe(rename('z.release.abproject'))
        .pipe(gulp.dest('../HappyHour.AppBuilder'));
});

gulp.task('rename-appbuilder-files', ['rename-abignore', 'rename-abproject', 'rename-debug-abproject', 'rename-release-abproject']);

gulp.task('appbuilder', ['inject-cordova-js', 'rename-appbuilder-files']);

gulp.task('appbuilder-uat', ['appbuilder'], function() {
    return gulp.src('../HappyHour.AppBuilder/js/*.js')
        .pipe(replace('#{HappyHour.ExternalBaseAddress}#{HappyHour.ApiUrl}', 'https://uat-happyhourapi.azurewebsites.net/api/v1'))
        .pipe(gulp.dest('../HappyHour.AppBuilder/js'));
});

gulp.task('browser-sync', function () {
    browserSync({
        port: 9001,
        server: {
            baseDir: './build'
        }
    });
    gulp.watch(config.paths.html.src, ['html', browserSync.reload]);
    gulp.watch(config.paths.vendorjs.src, ['vendor-js', browserSync.reload]);
    gulp.watch(config.paths.appjs.src, ['app-js', browserSync.reload]);
    gulp.watch(config.paths.configdebugjs.src, ['config-debug-js', browserSync.reload]);
    gulp.watch(config.paths.templates.src, ['templates', browserSync.reload]);
    gulp.watch(config.paths.vendorcss.src, ['vendor-css', browserSync.reload]);
    gulp.watch(config.paths.appcss.src, ['app-css', browserSync.reload]);
});