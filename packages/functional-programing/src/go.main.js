const { log, go, filter, map, reduce } = require("./utils/fx");

go(0, a => a + 1, a => a + 10, a => a + 100, log);

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 }
];

go(
  products,
  products => filter(p => p.price < 20000, products),
  products => map(product => product.price, products),
  prices => reduce((a, b) => a + b, prices),
  log
);
