const { resolve } = require("path");

// 导入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { DefinePlugin } = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "./my_build_dist"),
    filename: "js/my_build.js",
  },

  // watch: true,
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
      // png jpg
      /*       {
        test: /\.(jpe?g|png|gif|svg|)$/,
        use: {
          loader: 'file-loader',
          options: {
            // 文件的存放路径
            outputPath: 'images',
            // 文件的命名规则
            // https://v4.webpack.js.org/loaders/file-loader/#ext
            name: '[name]_[hash:8].[ext]'
          }
        }
      }, */
      /*       {
        test: /\.(jpe?g|png|gif|svg|)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100 * 1024,
            // 文件的存放路径
            outputPath: 'images',
            // 文件的命名规则
            // https://v4.webpack.js.org/loaders/file-loader/#ext
            name: '[name]_[hash:8].[ext]'
          }
        }
      } */
      // 使用 asset module type 代替 url-loader、file-loader
      {
        test: /\.(jpe?g|png|gif|svg|)$/,
        /*  type: 'asset/resource' */
        type: "asset",
        generator: {
          filename: "images/[name]_[hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },

      // 字体图标
      /*       {
        test: /\.(eot|ttf|woff2?)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'font',
            name: '[name]_[hash:8].[ext]'
            // name: 'font/[name]_[hash:8].[ext]'
          }
        }
      } */
      // 打包字体
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:8][ext]",
        },
      },
      // babel-loader
      {
        test: /\.js$/,

        use: [
          {
            loader: "babel-loader",
            /* options: {
              presets: ["@babel/preset-env"],
            }, */

            /* options: { 
             plugins: [
                "@babel/plugin-transform-arrow-functions",
                "@babel/plugin-transform-block-scoping",
              ], 
            },*/
          },
        ],
      },

      // vue
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
    ],
  },
  plugins: [
    // 插件对象
    // CleanWebpackPlugin 删除对应的文件夹
    new CleanWebpackPlugin(),
    // 生成html文件，默认是使用 ejs 模板生成
    /* new HtmlWebpackPlugin() */
    // 自定义生成 html 文件的 模板
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "`哈哈哈`",
    }),

    new DefinePlugin({
      BASE_URL: "`这是一个BASE_URLc`",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),

    new VueLoaderPlugin(),
  ],

  devServer: {
    // 运行时代码的目录
    /* 
      通过devserve启动服务时，后台默认开启express服务，通过本地端口访问该项目，
      遇到不能加载的文件时则通过 contentBase 路径下查找
    */
    // contentBase: resolve(__dirname, "public"),
    static: resolve(__dirname, "public"),

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

  resolve: {
    extensions: [".js", ".vue", ".mjs"],
    alias: {
      "@js": resolve(__dirname, "./src/js"),
      "@": resolve(__dirname, "./src"),
    },
  },
};
