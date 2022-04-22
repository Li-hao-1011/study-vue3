# webpack

基于 `node.js`运行，默认采用`commonjs` 

<hr/>

### entry：入口

- `string | [string] | object `

  - 对象语法中使用的属性：

    1. `dependOn`：当前入口所依赖的入口，它们必须在该入口加载前被加载
    2. `filename`：指定要输出的文件名
    3. `import`：启动时需加载的模块
    4. `library`：指定**library**选项，为当前`entry`构建一个`library`
    5. `runtime`：运行时**chunk**d的名字，如果设置了，就会创建一个新的运行时 chunk。在 `webpack 5.43.0` 之后可将其设为 **`false`** 以避免一个新的运行时 chunk。
    6. `publicPath`：当该入口的输出文件在浏览器中被引用时，为它们指定一个公共 URL 地址

    > 1. `runtime` 和 `dependOn` 不应在同一个入口上同时使用
    > 2. 确保 `runtime` 不能指向已存在的入口名称
    > 3. `dependOn` 不能是循环引用的

- 默认为：`./src/index.js` 

- 如果通过插件生成入口时，可以传递空对象`{}`给`entry` 

> 1. string ---> `./src/index.js`
>
>    单入口
>
>    打包形成一个chunk，输出一个bundle文件
>
>    chunk 名称默认为 main
>
> 2. array ---> ['./src/index.js', './src/add.js']
>
>     多入口
>
>      所有入口文件都形成一个 chunk，输出一个bundle文件
>
>      作用：在 HMR 功能中让html热更新生效
>
> 3. object
>
>    - 多入口
>    - 有几个入口文件就形成几个 chunk，输出几个 bundle
>
>    * chunk 的名称为 key 值
>
>    - 用法一：
>
>      ```js
>      {
>             index: './src/index.js'*
>             add: './src/add.js',
>      }
>      ```
>
>    - 用法二：
>
>      ```js
>      { 
>      // index 的多个入口 最终形成一个chunk，输出为一个bundle
>        index: ['./src/index.js', './src/count.js'],
>      // add 形成一个chunk，输出为一个bandle
>        add: './src/add.js'
>                
>      }
>      ```

- `example：` 

  ```js
  module.export = {
      // 单入口单文件
      entry: './src/index.js'
  	
      // 单入口多文件
      entry: ['./src/index.js', './src/common.js']
      
      // 多入口
      entry:{
          page1: './src/page1.js',
         	page2: './src/page2.js'
      }
  }
  ```

  

### output：出口

- `Object`

- 主要输出文件的默认值是：`./dist/main.js`，其他生成文件默认放置在`./dist`

- `example：` 

  ```js
  module.export = {
      output: {
          path: path.resolve(__dirname, './dist'),
          // 单入口（默认）
          // filename: 'main.js',
          // 表示输出到 dist/js 目录下
          // filename: 'js/main.js',
          
          // 多入口时，由于有多个输出，文件名不能写死
          // name 为 chunk 的名称，
          filename: 'js/[name].js',
          // 按需加载的模块打包后的名称(非入口chunk)
          chunkFilename: '[name].js',
          // 部署在服务器上的路径，'/'为根路径
          publicPath: '/',
          library:'[name]', // 全局向外暴露的变量名
          libraryTarget:'window', // 将变量名添加到哪个browser
      }
  }
  ```



### module

`module.rules` 

- webpack默认只能处理js、json格式的文件，`loader`的作用是将我其他格式的文件转换成`webpack`能够处理的文件，并将它们转换为有效模块

- 使用`loader`需要在`webpack`配置文件的`module.rules`中配置

- **`loader`**的两个必须属性：

  1. `test`属性，识别出那些文件会被转换
  2. `use`属性，定义出在进行转换时，应该使用哪个`loader`(可以使用多个)

- 使用**`loader`**的方式(1.下载 2.引用)

  1. 配置方式(推荐)：在`webpack.config.js`文件中指定`loader`

     loader **从左到右**/**从下到上** 地取值/执行

     ```js
     module.exports = {
         module:{
             rules:[
                 {
                     test:/\.css$/,
                     use:[
                         {loader: 'style-loader'},
                         {
                             loader: 'css-loader',
                             options:{
                                 modules:true
                             }
                         },
                         {
                             loader: 'sass-loader'
                         }
                     ]
                 }
             ]
         }
     }
     ```

     ```js
       module: {
         rules: [
           // 配置loader
           {
             test: /\.css$/,
             // 多个loader
             use: ['style-loader', 'css-loader'],
           },
           {
             test: /\.js$/,
             // 一个loader
             loader: 'eslint-loader',
             // exclude:排除 node_modules 文件
             exclude: /node_modules/,
             // 只检查 src 文件夹下的js文件
             include: resolve(__dirname, 'src'),
             // pre 优先执行
             // post 延后执行
             enforce: 'pre',
             // enforce: 'post',
             options: {},
           },
           {
             // 以下loader只会生效一个
             // 规则数组，当规则匹配时，只使用第一个匹配规则。
             oneOf: [],
           },
         ],
       },
     ```
  
     
  
  2. 内联方式：在每个`import`语句中显式指定`loader`

### plugin

- webpack插件，每一个插件都有一个特定的功能，它能处理`loader`无法处理的事情

- webpack插件有**`apply`**方法地JavaScript对象，`apply`方法会被`webpack compiler`调用，并且在整个 编译生命周期都可以访问 compiler 对象。

- 使用插件：( 1.下载 2.引入 3.使用)

  - 使用`require()`引入它，然后把它添加到 `plugins` 数组中

    ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const webpack = require('wabpack')
    const path = require('path')
    
    module.exports={
        // ...
        plugins:[
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({template:'./src/index.html'})
        ]
    }
    ```

    

### mode

- webpack打包分为两种：开发模式(development)、生产模式(production)

- |             |                                                    |          |
  | ----------- | -------------------------------------------------- | -------- |
  | production  | 将 `process.env.NODE_ENV` 的值设置为 `production`  | 生产模式 |
  | development | 将 `process.env.NODE_ENV` 的值设置为 `development` | 开发模式 |
  |             |                                                    |          |

### resolve

- `解析模块的规则`

  ```js
  // 解析模块的规则
    resolve: {
      // 配置解析模块路径别名，可以简写路径
      // 将 ./src/css/index.js 替换为 $css/index.js
      alias: {
        $css: resolve(__dirname, 'src/css'),
      },
      // 配置省略文件路径的后缀名
      extensions: ['.js', '.json'],
      // 告诉webpack解析模块去哪个目录
      modules: [resolce(__dirname, '../../../node_modules'), 'node_modules'],
    },
  ```

  

### devServer

> 生产环境中
>
> `webpack-dev-server`能够快速开发应用程序

```js
  devServer: {
    // 运行代码的目录
    contentBase: resolve(__dirname, 'build'),
    // 监视 contentBase目录下的文件，发生变化就会 reload
    watchContentBase: true,
    watchoptions: {
      // 忽略 node_modules下的文件
      ignored: /node_modules/,
    },
    // 启动 gzip压缩
    compress: true,
    port: 5000,  // 端口
    host: 'loaclhost', // 域名
    open: true, // 打开浏览器
    // 开启 HMR
    hot: true, // 热加载 HMR
    // 不要显示启动服务器日志信息
    clientLogLevel: 'none',
    // 除了一些基本启动信息外，其他内容不显示
    quiet: true,
    // 出错了不要全屏提示
    overlay: false,
    /**
     * 服务器代理
     * 解决开发环境下 跨域 问题
     */
    proxy: {
      '/api': {
        // 转发路径
        target: 'http://loaclhost:3000',
        // 发送请求时，请求路径重写：将 /api/xxx --重写为-> /xxx
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
```



### optimization







webpack

 开发环境：`webpack ./src/index.js -o ./build/built.js --mode=development`

 生产环境:  `webpack ./src/index.js -o ./build/built.js --mode=production`

> 1. 能处理`js`和`json`资源，不能处理`css`样式/img图片等资源
> 2. 能将ES6模块化编译为浏览器能识别地模块化~
> 3. 生产环境比开发环境多一个压缩`js`代码操作



### 初始化

> `npm init` 
>
> `npm i webpack webpack-cli -g`  // 全局安装
>
> `npm i webpack webpack-cli -D`  // 开发环境依赖

> ```js
> module.exports = {
>   entry: './src/index.js',
>   output: {
>     filename: 'built.js',
>     path: resolve(__dirname, 'bulid'),
>   },
>   module: {
>     rules: [
>       // loader配置
>       {
>         test: /\.css$/,
>         // style-loader：创建style标签，将js中的样式资源，添加到head中生效
>         // css-loader：将css文件变成commonjs模块加载到js中，里面是样式字符串
>         use: ['style-loader', 'css-loader'],
>       },
>     ],
>   },
>   // plugin 插件
>   plugins: [],
>   // 模式
>   mode: 'development', // development
>   // mode: 'production',
> };
> ```
>
> 





### 常用loader

| 处理对象       | loader名称                                                   | 依赖资源                           |
| -------------- | ------------------------------------------------------------ | ---------------------------------- |
| css            | style-loader、css-loader                                     |                                    |
| less           | style-loader、css-loader、less-loader                        | less                               |
| css中img(jpg)  | url-oader                                                    | file-loader                        |
| html中的img    | html-loader                                                  |                                    |
| css            | MiniCssExtractPlugin.loader(代替`style-loader`)(将css单独打包为css文件) |                                    |
| css            | postcss-loader、postcss-preset-env (css兼容性处理)           |                                    |
| js(js语法检查) | eslint-loader  eslint   eslint-config-airbnb-base eslint-plugin-import | 再package.json中配置`eslintConfig` |
|                |                                                              |                                    |
|                |                                                              |                                    |

```json
{
    "browserslist": {
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ],
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ]
  	},
  "eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true
    }
  }     
}
```



### 常用plugins

| 处理对象 | plugin名称                         | 用法                                                         | options配置                   |
| -------- | ---------------------------------- | ------------------------------------------------------------ | ----------------------------- |
| html     | html-wabpack-plugin                | new HtmlWebpackPlugin(options)(打包html文件)                 | {template:'./src/index.html'} |
| css      | mini-css-extract-plugin            | new MiniCssExtractPlugin()<br />将js中的css提取为单独的css文件 | {filename:'css/buil.css'}     |
| css      | optimize-css-assets-webpack-plugin | new OptimizeCssAssetsWebpackPlugin()<br />(压缩css)          |                               |
|          |                                    |                                                              |                               |



### 优化webpack配置

#### oneOf

优化生产环境loade的匹配

```js
module.exports = {
    /* 其他loader */
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        // 优先执行
        enforceL: 'pre',
        // 在 package.json中配置 eslintConfig
        options: {
          // 自动修复语法
          fix: true,
        },
      },
      {
        // oneOf：以下loader 只会匹配一个
        // 不能由两个配置处理同一类型文件

        oneOf: [
          {
            test: /\.css$/,
            use: [...CommonCssLoader],
          },
          {
            test: /\.less$/,
            use: [...CommonCssLoader, 'less-loader'],
          },
          /* 一个文件只能被一个loader处理 */
          /* 当一个文件要被多个loader处理，那么一定要制定loader的执行顺序 */
          /* 先执行eslint,再执行babel
          enforceL属性为pre 则优先执行 ---->  enforceL: 'pre',
        */

          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: { version: 2 },
                    tergets: {
                      chrome: '60',
                      firefox: '50',
                    },
                  },
                ],
              ],
            },
          },
          // 处理 imgs
          {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              // 关闭 ES6module，使用commonjs
              esModule: false,
            },
          },
          // 处理html中的imgs
          {
            test: /\.html$/,
            loader: 'html-loader',
          },
          // 其他文件
          {
            extends: /.(js|css|less|html|jpg|png|gif)$/,
            loader: 'file-loader',
            options: {
              outputPath: 'media',
            },
          },
        ],
      },
    ],
  }
};

```

