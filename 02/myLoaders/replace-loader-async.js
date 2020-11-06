// 自定义loader
// loader就是一个函数，不可以是箭头函数
// loader必须有返回值
// loader如何接收参数
// loader的api都挂载到this上
// 如何返回多种信息  this.callback
// 如何处理异步逻辑 this.async
// 多个自定义loader如何处理
// 如何处理自定义loader的路径问题
module.exports = function(source) {
    console.log(source);
    console.log(this.query, source);
    // const content = source.replace("hello", "哈哈");
    // this.callback(null, content);
    const callback = this.async();
    setTimeout(() => {
      const content = source.replace("hello", "一线蓝光");
      callback(null,content);
    }, 3000);
  
    // return source.replace("hello", this.query.name)
  };
  