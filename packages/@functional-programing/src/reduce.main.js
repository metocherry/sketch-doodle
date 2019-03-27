const log = require("./utils/log");
const reduce = require("./utils/reduce");

// const nums = [1, 2, 3, 4, 5];
// log(reduce((a, b) => a + b, nums, 0));
// log(reduce((a, b) => a + b, nums));

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 }
];

function sum(total_price, product) {
  return total_price + product.price;
}

log(reduce(sum, products, 0));
