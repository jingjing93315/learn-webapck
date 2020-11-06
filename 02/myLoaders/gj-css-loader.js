// gj-css-loader.js
// 暗号哦：可以做，但没必要
module.exports = function(source){
    // 序列化 css-loader支持css语法
    return JSON.stringify(source)
}