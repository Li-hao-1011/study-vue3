
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{        test: /\.tsx?$/,
        use: "ts-loader", }],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ]
}; 
/* 
const path = require("path");
module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, ".//dist"),
    // 使用webpack-dev-server运行编译时，即热更新时的静态文件前缀
    //因为编译内容是存在内存中的，不会真正创建文件，设置publicPath值决定以什么路径引用文件
    // 值是相对于 public/index.html 的路径，需要以 / 结尾
    // 需要安装 webpack-dev-server
    // publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    // 使用 import 导入代码时，不添加扩展名则按一下扩展名并按顺序匹配文件
    extensions: [".tsx", ".ts", ".js"],
  },
};
 */