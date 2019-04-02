const curry = require("./curry");

function filter(iteratee, collection) {
  const result = [];
  for (const item of collection) {
    if (iteratee(item)) result.push(item);
  }

  return result;
}

module.exports = curry(filter);
