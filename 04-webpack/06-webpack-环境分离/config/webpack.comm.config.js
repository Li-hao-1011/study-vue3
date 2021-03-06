const { resolve } = require("path");

// 导入插件

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { DefinePlugin } = require("webpack");

const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  target: "web",
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "../my_build_dist"),
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

    new VueLoaderPlugin(),
  ],

  resolve: {
    extensions: [".js", ".vue", ".mjs"],
    alias: {
      "@js": resolve(__dirname, "../src/js"),
      "@": resolve(__dirname, "../src"),
    },
  },
};
