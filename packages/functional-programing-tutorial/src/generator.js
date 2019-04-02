// 제너레이터/이터레이터

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return 100;
// }

// let iter = gen();
// console.log(iter[Symbol.iterator]() === iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (const a of gen()) console.log(a);

// # ODDS

function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}

function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

// let iter = odds(10);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// let infi = infinity();
// console.log(infi.next());
// console.log(infi.next());
// console.log(infi.next());
// console.log(infi.next());
// console.log(infi.next());
// console.log(infi.next());

for (const a of odds(40)) console.log(a);
