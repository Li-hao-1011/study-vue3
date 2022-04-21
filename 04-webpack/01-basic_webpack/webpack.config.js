const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "./build_dist"),
    filename: "build.js",
  },
};
