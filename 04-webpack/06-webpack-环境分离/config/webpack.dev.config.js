const { resolve } = require("path");

const { merge } = require("webpack-merge");

const commConfig = require("./webpack.comm.config");

module.exports = merge(commConfig, {
  mode: "development",
  devtool: "source-map",

  devServer: {
    // 运行时代码的目录
    /* 
      通过devserve启动服务时，后台默认开启express服务，通过本地端口访问该项目，
      遇到不能加载的文件时则通过 contentBase 路径下查找
    */
    // contentBase: resolve(__dirname, "public"),
    static: resolve(__dirname, "../public"),

    // 模块热替换 HMR
    /* 
    模块热替换是指在 应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面；
    */
    hot: true,
    host: "0.0.0.0",
    port: 5000,

    // gzip压缩
    compress: true,

    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": "",
        },
        // 默认情况下不接受转发 https的服务器，设置为false即可转发
        secure: "false",

        changeOrigin: true,
      },
    },
  },
});
