const odds = require("./odds");

// for, of 전개 연산자, 구조분해, 나머지 연산자
function log(...args) {
  console.log(...args);
}

log(...odds(10));
log([...odds(10), ...odds(20)]);
