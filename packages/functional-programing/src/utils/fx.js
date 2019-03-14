const log = require("./log");
const map = require("./map");
const filter = require("./filter");
const reduce = require("./reduce");
const go = require("./go");
const pipe = require("./pipe");

const fx = {
  log,
  map,
  filter,
  reduce,
  go,
  pipe
};

module.exports = fx;
