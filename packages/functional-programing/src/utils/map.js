const curry = require("./curry");

function map(iteratee, collection) {
  const result = [];
  for (const item of collection) {
    result.push(iteratee(item));
  }

  return result;
}

module.exports = curry(map);
