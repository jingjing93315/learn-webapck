// 零配置
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

// 暗号哦: 等价交换，炼金术不变的原则
const setMpa = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
  entryFiles.map((item, index) => {
    const entryFile = item;
    const match = entryFile.match(/src\/(.*)\/index\.js$/);
    const pageName = match[1];
    entry[pageName] = entryFile;
    htmlWebpackPlugins.push(
      new htmlWebpackPlugin({
        template: `./src/${pageName}/index.html`,
        filename: `${pageName}.html`,
        chunks: [pageName],
      })
    );
  });
  return {
    entry,
    htmlWebpackPlugins,
  };
};

const { entry, htmlWebpackPlugins } = setMpa();

module.exports = {
  entry,
  output: {
    // path是绝对路径
    path: path.resolve(__dirname, "./map"),
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
    ],
  },
  /**
   * 选择一种source map格式来增强调试过程
   */
  // devtool: "source-map", // 开启source-,ap  inline-source-map cheap-source-map
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:9092",
      },
    },
  },
  plugins: [
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
