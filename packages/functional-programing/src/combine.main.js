const { log, go, filter, map, reduce, pipe } = require("./utils/fx");

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 }
];

const add = (a, b) => a + b;

const total_price = pipe(
  map(p => p.price),
  reduce(add)
);

const base_total_price = predi =>
  pipe(
    filter(predi),
    total_price
  );

go(products, base_total_price(p => p.price < 20000), log);

go(products, base_total_price(p => p.price >= 20000), log);
