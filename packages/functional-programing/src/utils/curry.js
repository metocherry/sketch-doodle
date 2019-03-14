function curry(func) {
  return (head, ...args) => {
    return args.length ? func(head, ...args) : (...args) => func(head, ...args);
  };
}

module.exports = curry;
