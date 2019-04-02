const path = require("path");
const gulp = require("gulp");

const proejct_path = path.resolve(__dirname, "../");

module.exports = function tinyImage() {
  return gulp
    .src(path.resolve(proejct_path, "src/images/**/*.{png,jpg,jpeg}"))
    .pipe(gulp.dest(path.resolve(proejct_path, "public/images/original")));
};
