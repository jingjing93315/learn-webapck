// 零配置
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const txtWebpackPlugin = require('./myPlugins/txt-webpack-plugin.js')
module.exports = {
  entry: {
    index: "./src/index.js",
    // list: "./src/list.js"
  },
  output: {
    // path是绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 多入口，使用占位符方式
    filename: "[name].js",
  },
  mode: "development", // 开发模式
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "../images",
            limit: 1024 * 3, //阈值，超过阈值的图片会独立文件，没有超过会处理成base64
          },
        },
      },
      {
        test: /\.(eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "../",
          },
        },
      },
      {
        test: /\.js$/,
        use: "babel-loader"
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: [
        //       [
        //         "@babel/preset-env",
        //         {
        //           targets: {
        //             chrome: "66",
        //             edge: "16",
        //           },
        //           corejs: 2,
        //           useBuiltIns: "usage", // entry usage false
        //         },
        //       ],
        //     ],
        //   },
        // },
      },
    ],
  },
  /**
   * 选择一种source map格式来增强调试过程
   */
  devtool: "source-map", // 开启source-,ap  inline-source-map cheap-source-map
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081,
    hot: true,
    hotOnly: true, // 即便HMR不生效，浏览器也不自动刷新
    proxy: {
      "/api": {
        target: "http://localhost:9092",
      },
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    // new htmlWebpackPlugin({
    //   template: "./src/list.html",
    //   filename: "list.html",
    //   chunks: ["list"],
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new txtWebpackPlugin({})
  ],
};
