import propertyOf from '#packages/utility/propertyOf'

/**
 * 调用object对象path上的方法
 * @param {object} object={} 对象
 * @param {(string|string[])} path 用来调用的方法路径
 * @param {...*} args 调用对象属性方法时需要传入的参数
 */
function invoke (object = {}, path, ...args) {
  const func = propertyOf(object, path)

  return func(...args)
}

export default invoke
