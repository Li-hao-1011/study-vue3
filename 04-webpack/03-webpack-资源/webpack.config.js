const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "./build_dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        // test: 正则
        test: /\.css/,
        use: ["css-loader"],
      },
    ],
  },
};
