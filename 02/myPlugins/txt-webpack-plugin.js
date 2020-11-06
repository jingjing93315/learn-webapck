class TxtWebpackPlugin {
    constructor(){  
    }
    //暗号哦：做人嘛，最重要的是开心
    // apply函数，帮助插件注册，接收compiler类
    apply(compiler){
        // tap只能触发同步的钩子
        // emit  AsyncSeriesHook  使用tapAsync触发
        compiler.hooks.emit.tapAsync('TxtWebpackPlugin', (compilation,cb)=>{
            let assets = compilation.assets
            let count = 0
            let sourceResult = ''
            for(let key in assets){
                count++
                sourceResult += `${key}\n` 
            }
            compilation.assets["fileList.txt"] = {
                source: function(){
                    // 定义文件内容
                    return `文件数量${count}\n` + sourceResult
                },
                size: function(){
                    // 定义文件体积
                    return 1024
                }
            }
            cb()
        })
    }
}

module.exports = TxtWebpackPlugin