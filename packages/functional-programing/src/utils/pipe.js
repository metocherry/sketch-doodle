const go = require("./go");

function pipe(head, ...funcs) {
  return (...args) => go(head(...args), ...funcs);
}

module.exports = pipe;
