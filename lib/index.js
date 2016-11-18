const concat = require('gulp-concat');
const bemtree = require('gulp-bem-xjst').bemtree;
const gulpif = require('gulp-if');
const wrap = require('gulp-wrap');

module.exports = (bundle, options) => {
  options = Object.assign({
    ym: false
  }, options);

  return bundle.src('bemtree')
  .pipe(concat('any.bemtree.js'))
  .pipe(bemtree())
  .pipe(gulpif(options.ym, wrap({src: __dirname + '/../wrappers/ym.js'})))
  .pipe(concat(bundle.name + '.bemtree.js'))
}
