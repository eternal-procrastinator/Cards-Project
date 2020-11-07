const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const styles = require('./styles')
const pugtohtml = require('./pugtohtml')
const script = require('./script')

const server = require('browser-sync').create()

function readyReload(cb) {
    server.reload()
    cb()
}

module.exports = function reload(cb) {
    server.init({
        server: {
            baseDir: 'build',
            index: 'landing.html'
        },
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/images/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify, readyReload))
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/scripts/**/*.js', gulp.series(script, readyReload))
    gulp.watch('src/pages/**/*.pug', gulp.series(pugtohtml, readyReload))

    return cb()
}