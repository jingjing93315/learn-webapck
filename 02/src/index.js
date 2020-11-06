// 样式
// import css from "./index.css"
// import counter from './counter.js'
// import number from './number.js'
// number()
// counter()


// vue react

// 手动监控
// hot标识符
// if(module.hot){
//     // 对哪一个模块实施hmr
//     module.hot.accept("./number.js", ()=>{
//        document.body.removeChild(document.getElementById('number'))
//        number()     
//     })
// }
// import img from "./gj.jpg"
// file-loader url-loader
// 自定义loader
// console.log('hello webpack');
// console.log(img);

// const pic = new Image()

// pic.src = img

// const tag = document.getElementById('app')
// tag.append(pic)
// console.log('Hello Webpack');

// 创建本地服务器
// 打包成果  自动帮助我们启动一个浏览器窗口
// 热更新
// mock数据 提升开发效率
// 前后端 在开发之前定义好接口，接口字段，以及文档产出时间
// 多页面打包通用方案


// import axios from "axios"

// axios.get('api/info').then(res=> {
//     console.log(res);
    
// })
// var btn = document.createElement('button')
// btn.innerHTML = "新增"
// document.body.appendChild(btn)

// btn.onclick = function(){
//     var div = document.createElement('div')
//     div.innerHTML = '一线蓝光'
//     document.body.appendChild(div)
// }
// console.log('hello webpack');
// 生成依赖
//配置为usage，就不需要引入
// import "@babel/polyfill" // 打包后文件增大问题 按需加载
// const arr = [new Promise(()=>{}), new Promise(()=>{})];

// arr.map((item)=> {
//     console.log(item);
// })


/**
 * react代码
 */

//  import React, { Component } from 'react';
//  import ReactDom from "react-dom"
 
//  class App extends Component {
//      render() {
//          return (
//              <div>
//                  hello world
//              </div>
//          );
//      }
//  }
 
//  ReactDom.render(<App/>, document.getElementById("app"))
//  const webpack = require('webpack')
//  const webpackConfig = require('../webpack.config.js')

//  const compiler =  webpack(webpackConfig)

// // 打包到编译结束 经历的阶段

// Object.keys(compiler.hooks).forEach(hookName => {
//     compiler.hooks[hookName].tap('一线蓝光', ()=>{
//         console.log(`run -----> ${hookName}`);
//     })
// })

//  compiler.run()