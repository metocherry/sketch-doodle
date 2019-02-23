process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  // const test_file = "bundle.test.js";
  const test_file_pattern = "test/**/*.spec.js";

  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      { pattern: test_file_pattern, watched: true }
      // test_file
    ],
    exclude: [],
    preprocessors: {},
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    concurrency: Infinity
  });
};
