/**
 * 创建一个函数。
 * 该函数接收一个函数列表。
 * 倒序执行，上一个函数的返回值作为下一个函数的入参
 * @param {function[]} fns 待执行函数列表
 * @returns {function}
 */
function compose (fns = []) {
  return function (arg) {
    fns.reduceRight((res, cb) => cb(res), arg)
  }
}

export default compose
