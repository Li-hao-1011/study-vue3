const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "./my_build_dist"),
    filename: "my_build.js",
  },
};
