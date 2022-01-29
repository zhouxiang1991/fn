import castArray from '#packages/utility/castArray'

/**
 * 创建一个函数,调用func时，根据指定的 indexes 调整对应位置参数。
 * 其中第一个索引值是对应第一个参数，第二个索引值是作为第二个参数，依此类推。
 * @param {function} func 待调用函数
 * @param {(number|number[0])} indexes=[] 参数排列位置
 * @returns {function}
 */
function rearg (func, indexes = []) {
  return function (...args) {
    const newArgs = castArray(indexes).map(index => args[index], [])

    return func(...newArgs)
  }
}

export default rearg
