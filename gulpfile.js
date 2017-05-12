// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  assets = require('postcss-assets'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano'),
  bs = require('browser-sync').create(); // create a browser sync instance.

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }

  // image processing
    gulp.task('images', function() {
    var out = folder.build + 'images/';
    return gulp.src(folder.src + 'images/**/*')
        .pipe(newer(out))
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(out));
    });

    // HTML processing
    gulp.task('html', ['images'], function() {
    var
        out = folder.build + 'html/',
        page = gulp.src(folder.src + 'html/**/*')
        .pipe(newer(out));

    // minify production code
    if (!devBuild) {
        page = page.pipe(htmlclean());
    }

    return page.pipe(gulp.dest(out));
});

// Index processing
gulp.task('index', ['images'], function() {
    var
        out = folder.build,
        page = gulp.src(folder.src + 'index.html')
        .pipe(newer(out));
        console.log("made it here");
    // minify production code
    if (!devBuild) {
        page = page.pipe(htmlclean());
    }

    return page.pipe(gulp.dest(out));
});

    // JavaScript processing
    gulp.task('js', function() {



    var jsbuild = gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
                            'node_modules/angular/angular.js',
                            'node_modules/angular-ui-router/release/angular-ui-router.js',
                             folder.src + 'js/app.module.config.js',
                             folder.src + 'js/**/*'])
        .pipe(deporder())
        .pipe(concat('main.js'));

    if (!devBuild) {
        jsbuild = jsbuild
        .pipe(stripdebug())
        .pipe(uglify());
    }

    return jsbuild.pipe(gulp.dest(folder.build + 'js/'));

    });

    // CSS processing
    gulp.task('css', ['images'], function() {

    var postCssOpts = [
        assets({ loadPaths: ['images/'] }),
        autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
        mqpacker
    ];

    if (!devBuild) {
        postCssOpts.push(cssnano);
    }

    return gulp.src(folder.src + 'scss/main.scss')
        .pipe(sass({
        outputStyle: 'nested',
        imagePath: 'images/',
        precision: 3,
        errLogToConsole: true
        }))
        .pipe(postcss(postCssOpts))
        .pipe(gulp.dest(folder.build + 'css/'))
        .pipe(bs.reload({stream: true}));

    });

    // run all tasks
    gulp.task('run', ['html', 'css', 'js']);

    // watch for changes
    gulp.task('watch', function() {

    // image changes
    gulp.watch(folder.src + 'images/**/*', ['images']).on('change', bs.reload);

    // html changes
    gulp.watch(folder.src + 'html/**/*', ['html']).on('change', bs.reload);

    // index changes
    gulp.watch(folder.src + 'index.html', ['index']).on('change', bs.reload);

    // javascript changes
    gulp.watch(folder.src + 'js/**/*', ['js']).on('change', bs.reload);

    // css changes
    gulp.watch(folder.src + 'scss/**/*', ['css']);

    });

    // default task
    gulp.task('default', ['run', 'watch', 'browser-sync']);

// browser sync
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "build/"
        }
    });
});