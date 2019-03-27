module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          modules: false
        }
      }
    ]
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"]
      }
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }]
  ]
};
