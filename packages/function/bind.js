import curry from '#packages/function/curry'

/**
 * 创建一个函数。
 * self绑定func函数中的this。
 * func函数会接收partials附加参数。
 * @param {function} func 需要绑定self的函数
 * @param {object} self 对象
 * @param {...} partials 其他参数，支持占位符_
 * @returns {function}
 */
function bind (func, self, ...partials) {
  return curry(func.bind(self), func.length)(...partials)
}

export default bind
