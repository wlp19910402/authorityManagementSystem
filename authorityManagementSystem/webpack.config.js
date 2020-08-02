const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fs = require('fs')
const overrideBrowserslist = {
  overrideBrowserslist: [
    "> 10%",
    "last 7 versions",
    "ie >= 9",
    "firefox >= 20"
  ]
}

let featureName = 'h5';  // 要启动的项目名称
let page = 'demo'; // 启动项目的入口文件js名称
const devMode = process.env.NODE_ENV === 'development';
process.argv.some(function (arg) {
  console.log(arg)
  let arr = arg.match(/\-\-env=([a-zA-Z0-9\-_,]+)/);
  if (arr) {
    let config = arr[ 1 ].split(',');

    featureName = config[ 0 ];
    if (config[ 1 ]) {
      page = config[ 1 ];
    }
  }
});


module.exports = {
  // entry: path.join(__dirname, 'src/h5/pages/demo.js'),
  entry: path.join(__dirname, 'src/' + featureName + '/pages/' + page + '.js'),
  mode: devMode ? "development" : "production",
  output: {
    // filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    filename: featureName + '/[name].js'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: [ {
          loader: 'vue-loader',
          options: {
            postcss: [
              require("autoprefixer")(overrideBrowserslist)
            ],
            loaders: {
              less: (devMode ? [ 'css-hot-loader' ] : []).concat([
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                },
                {
                  loader: "less-loader",
                  options: {
                    javascriptEnabled: true
                  }
                }
              ]),
              css: (devMode ? [ 'css-hot-loader' ] : []).concat([
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                }
              ])
            }
          }
        } ]
      },
      // {
      //   test: /\.js$/,
      //   include: [resolve('src') ],
      //   loader: 'babel-loader',
      //   options: {
      //     presets: [ '@babel/preset-env' ]
      //   }
      // },
      {
        test: /.css$/,
        use: (
          devMode ? [ 'css-hot-loader' ] : []).concat([
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require("autoprefixer")(overrideBrowserslist)
                ]
              }
            }
          ])
      },
      {
        test: /\.less$/,
        use: (devMode ? [ 'css-hot-loader' ] : []).concat([
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ])
      }
    ]
  },
  resolve: {
    extensions: [ '.vue', '.js' ],
    modules: [ 'node_modules' ],
    alias: {
      vue: 'vue/dist/vue.min.js',
      components: path.resolve(__dirname + '/src/components'),
      '@': path.resolve('src'),
      stores: path.resolve(__dirname + '/src/stores')
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    historyApiFallback: {
      index: `/dist/h5/index.html`
    },
    host: '0.0.0.0',
    port: 8082,
    disableHostCheck: true
  }
}