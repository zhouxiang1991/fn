/**
 * 创建一个函数，func函数本来是按数组传递，调用func时允许将多个参数按顺序传递
 * @param {function} func 待调用函数
 * @returns {function}
 */
function rest (func) {
  return function (...params) {
    return func(params)
  }
}

export default rest
