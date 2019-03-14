const { log, pipe } = require("./utils/fx");

const f = pipe(
  a => a + 1,
  a => a + 10,
  a => a + 100
);

log(f(0));
