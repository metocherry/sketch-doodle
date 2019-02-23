import resolve from "rollup-plugin-node-resolve";
import common from "rollup-plugin-commonjs";

export default {
  input: "lib/main/index.js",
  output: {
    file: "bundle.js",
    format: "esm"
  },
  plugins: [common(), resolve()]
};
