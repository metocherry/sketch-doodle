const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const istanbul = require("rollup-plugin-istanbul");
const resolve = require("rollup-plugin-node-resolve");

process.env.CHROME_BIN = require("puppeteer").executablePath();

const test_file = "test/**/*.spec.js";

module.exports = {
    basePath: "",
    frameworks: ["jasmine"],
    files: [{ pattern: test_file, watched: false }],
    exclude: [],
    preprocessors: {
        [test_file]: ["rollup"]
    },
    rollupPreprocessor: {
        plugins: [resolve(), commonjs(), babel()],
        output: {
            name: "test",
            format: "umd"
        }
    },
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: "info",
    browsers: ["ChromeHeadless"],
    concurrency: Infinity
};
