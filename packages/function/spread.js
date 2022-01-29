/**
 * 创建一个函数，func函数本来多个参数传递，调用func时允许将参数按照数组传递
 * @param {function} func 待调用函数
 * @returns {function}
 */
function spread (func) {
  return function (params) {
    return func(...params)
  }
}

export default spread
