/**
 * 创建一个函数，args将会传入func
 * @param {function} func 预设的函数
 * @returns {function}
 */
function presetFn (func) {
  return function (...args) {
    return func(...args)
  }
}

export default presetFn
