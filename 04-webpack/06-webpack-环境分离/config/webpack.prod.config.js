const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const { merge } = require("webpack-merge");

const commConfig = require("./webpack.comm.config");
module.exports = merge(commConfig, {
  mode: "production",
  plugins: [
    // CleanWebpackPlugin 删除对应的文件夹
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {   
          from: "./public",
          // 默认为 ./
          // to: "./",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
});
