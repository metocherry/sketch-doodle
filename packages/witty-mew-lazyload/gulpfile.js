// gulp-load-plugins

exports.unit = require("./tasks/unit.task");
exports.test = require("./tasks/test.task");
exports.image = require("./tasks/tiny-image.task");
exports.copy = require("./tasks/copy.task");

exports.default = done => done();
