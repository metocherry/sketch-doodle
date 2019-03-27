const curry = require("./curry");

function reduce(iteratee, collection, accumulator) {
  let result = accumulator;
  let iterator = collection;

  if (result === undefined) {
    iterator = collection[Symbol.iterator]();
    result = iterator.next().value;
  }

  for (const item of iterator) {
    result = iteratee(result, item);
  }

  return result;
}

module.exports = curry(reduce);
