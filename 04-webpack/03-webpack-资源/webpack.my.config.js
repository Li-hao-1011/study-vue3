const { resolve } = require('path')

// 导入插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { DefinePlugin } = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, './my_build_dist'),
    filename: 'js/my_build.js'
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
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader'
          },
          { loader: 'less-loader' }
        ]
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
        type: 'asset',
        generator: {
          filename: 'images/[name]_[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
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
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    // 插件对象
    // CleanWebpackPlugin 删除对应的文件夹
    new CleanWebpackPlugin(),
    // 生成html文件，默认是使用 ejs 模板生成
    /* new HtmlWebpackPlugin() */
    // 自定义生成 html 文件的 模板
    new HtmlWebpackPlugin({
      template: './index.html',
      title: '`哈哈哈`'
    }),

    new DefinePlugin({
      BASE_URL: '`这是一个BASE_URLc`'
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}
