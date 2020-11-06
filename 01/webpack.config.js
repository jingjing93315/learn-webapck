// 零配置
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.js",// 入口文件  str arr obj
    // 数组形式也是单入口，只有对象模式是多入口
    // entry: {
    //    // main 是chunk名称 多页面应用
    //     index : './src/index.js',
    //     list: './src/list.js',
    //     detail: './src/detail.js'
    // },
    output: {
        // path是绝对路径
        path:path.resolve(__dirname, "./dist"),
        // 多入口，使用占位符方式
        filename: "[name].js"
    },
    mode: "development", // 开发模式
    module: {
        rules:[
            {
                test: /\.css$/,
                // css-loader =>webpack支持.css模块的语法
                // style-loader 把css代码抽离出来，动态的生成style标签插入到html头部，把css放进去
                // 多个loader存在的时候，从后往前执行
                use: ['style-loader','css-loader']
            },
            // {
            //     test: /\.vue$/,
            //     use: "vue-loader"
            // }
        ]
    },
    plugins: [new htmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })]

}