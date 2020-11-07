const gulp = require('gulp')

const reload = require('./gulp/tasks/reload')
const pug2html = require('./gulp/tasks/pugtohtml')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
//const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
//const clean = require('./gulp/tasks/clean')
//const copyDependencies = require('./gulp/tasks/copyDependencies')
//const lighthouse = require('./gulp/tasks/lighthouse')
//const svgSprite = require('./gulp/tasks/svgSprite')

/*function setMode(isProduction = false) {
    return cb => {
        process.env.NODE_ENV = isProduction ? 'production' : 'development'
        cb()
    }
}*/

const dev = gulp.parallel(pug2html, styles, imageMinify, script/*, fonts, svgSprite*/)

//const build = gulp.series(clean, copyDependencies, dev)

module.exports.start = gulp.series(dev, reload)
//module.exports.start = gulp.series(setMode(), build, reload)
//module.exports.build = gulp.series(setMode(true), build)

//module.exports.lighthouse = gulp.series(lighthouse)