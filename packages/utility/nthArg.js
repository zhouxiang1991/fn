/**
 * 建一个函数，这个函数返回第 n 个参数。如果 n为负数，则返回从结尾开始的第n个参数
 * @param {number} n=0 要返回参数的索引值
 * @returns {(*|*[])}
 */
function nthArg (n = 0) {
  return function (...args) {
    if (n >= 0) {
      return args[n]
    }

    return args[args.length + n]
  }
}

export default nthArg
