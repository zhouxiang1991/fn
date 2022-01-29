import curry from '#packages/function/curry'

/**
 * 创建一个调用fn的函数。
 * 该函数的this绑定到fn，调用次数不超过n次。
 * 之后再调用这个函数，将返回一次最后调用fn的结果。
 * @param {number} n 超过多少次不再调用fn。
 * @param {function} fn 限制执行的函数。
 * @returns {function}
 */
function before (n, fn) {
  let _n = n
  let result

  return function (...args) {
    if (--_n > 0) {
      result = fn.call(this, ...args)
    }

    return result
  }
}

export default curry(before, 2)
