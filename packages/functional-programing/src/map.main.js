const log = require("./utils/log");
const map = require("./utils/map");

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 }
];

log(map(p => p.name, products));
log(map(p => p.price, products));

function* gen() {
  yield 2;
  yield 3;
  yield 4;
}

log(map(a => a * a, gen()));

const m = new Map();
m.set("a", 10);
m.set("b", 20);

log(map(([k, a]) => [k, a * 2], m));
log(new Map(map(([k, a]) => [k, a * 2], m)));
