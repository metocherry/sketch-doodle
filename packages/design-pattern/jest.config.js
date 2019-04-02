const path = require("path");

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  // verbose: true,
  // testEnvironment: "jsdom",
  rootDir: ROOT_PATH,
  roots: ["<rootDir>"],
  testRegex: ".*\\.spec\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleDirectories: ["node_modules", path.join(ROOT_PATH, "src/"), ROOT_PATH],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePaths: ["<rootDir>/src"],
  globals: {
    "ts-jest": {
      diagnostics: true // 컴파일시 에러가 있을 경우 무시하지 않고 테스트를 실패하게한다.
    }
  },
  cacheDirectory: ".jest/cache"
};
