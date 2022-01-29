import curry from '#packages/function/curry'

/**
 * @
 * 创建一个调用fn的函数。
 * 调用fn时最多接受n个参数，忽略多出的参数。
 * @param {function} fn 需要被限制参数个数的函数。
 * @param {number} [n=fn.length] 限制的参数数量。
 * @returns {function} 返回新的覆盖函数
 */
function ary (fn, n = fn.length) {
  return function (...args) {
    return fn(...args.slice(0, n))
  }
}

export default curry(ary, 2)
