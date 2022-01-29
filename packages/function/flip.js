/**
 * 创建一个函数，调用func时候接收翻转的参数。
 * @param {function} func 待调用函数
 * @returns {function}
 */
function flip (func) {
  return function (...args) {
    return func(...args.reverse())
  }
}

export default flip
