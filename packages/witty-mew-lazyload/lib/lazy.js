const Lazyload = require("./lazyload");

const lazy = function lazy() {};

lazy.version = "0.0.1";

lazy.create = function create(options = {}) {
  return new Lazyload(options);
};

module.exports = lazy;
