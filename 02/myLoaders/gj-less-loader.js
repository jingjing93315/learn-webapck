// 使用less模块处理less语法
// gj-less-loader.js
// 暗号哦：可以做，但没必要
const less = require('less')
module.exports = function(source){
    less.render(source, (error, output)=> {
        let {css} = output
        this.callback(error, css)
    })
}