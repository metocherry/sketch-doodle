const path = require("path");
const gulp = require("gulp");
const size = require("gulp-size");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const mozjpeg = require("imagemin-mozjpeg");
const gifsicle = require("imagemin-gifsicle");

const proejct_path = path.resolve(__dirname, "../");

module.exports = function tinyImage() {
  return gulp
    .src(path.resolve(proejct_path, "src/images/**/*.{png,jpg,jpeg}"))
    .pipe(
      imagemin(
        [
          pngquant({ optimizationLevel: 7 }),
          mozjpeg({ progressive: false, quality: 0, fastCrush: true }),
          gifsicle({ interlaced: true })
        ],
        {
          verbose: true
        }
      )
    )
    .pipe(size())
    .pipe(gulp.dest(path.resolve(proejct_path, "public/images/tiny")));
};
