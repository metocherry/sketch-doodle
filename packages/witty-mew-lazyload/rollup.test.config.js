import resolve from "rollup-plugin-node-resolve";
import common from "rollup-plugin-commonjs";
import multiEntry from "rollup-plugin-multi-entry";

export default {
  input: "lib/test/**/*.js",
  output: {
    file: "bundle.test.js",
    format: "esm"
  },
  plugins: [common(), resolve(), multiEntry()]
};
