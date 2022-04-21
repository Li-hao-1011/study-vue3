const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "./my_build_dist"),
    filename: "my_build.js",
  },
  module: {
    rules: [
      /*       {
        // test: 正则
        test: /\.css$/,
        // use: [ "style-loader", "css-loader" ],
        // use中loader的执行顺序是：从后往前 | 从右向左
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        // test: 正则
        test: /\.less$/,
        // use: [ "style-loader", "css-loader" ],
        // use中loader的执行顺序是：从后往前 | 从右向左
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      }, */


      /* 将 less 与 css 合并 */
      {
        // test: 正则
        test: /\.(less|css)$/,
        // use: [ "style-loader", "css-loader" ],
        // use中loader的执行顺序是：从后往前 | 从右向左
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
          },
          { loader: "less-loader" },
        ],
      },
    ],
  },
};
