// gj-style-loader.js
// 暗号哦：可以做，但没必要
module.exports = function(source) {
  let script = `const styleTag = document.createElement('style');
    styleTag.innerHTML = ${source};
        document.head.appendChild(styleTag)
    `;
  return script;
};
