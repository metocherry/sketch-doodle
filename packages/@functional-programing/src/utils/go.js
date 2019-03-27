const reduce = require("./reduce");

function go(...args) {
  return reduce((accumulator, func) => func(accumulator), args);
}

module.exports = go;
