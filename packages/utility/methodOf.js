import invoke from '#packages//object/invoke'

/**
 * 创建一个函数，该函数接收一个属性路径path
 * @param {object} object 对象
 * @param {...*} args 传递给调用函数的参数
 * @returns {function}
 */
function methodOf (object, ...args) {
  return function (path) {
    return invoke(object, path, ...args)
  }
}

export default methodOf
