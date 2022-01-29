/**
 * 创建一个函数，args将会传入func
 * @param {...*} args 预设的参数
 * @returns {function}
 */
function presetArg (...args) {
  return function (func) {
    return func(...args)
  }
}

export default presetArg
