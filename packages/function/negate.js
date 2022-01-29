/**
 * 创建一个函数，该函数返回predicate函数调用结果取反后的值
 * @param {function} predicate 断言函数
 * @returns {function}
 */
function negate (predicate) {
  return function (...args) {
    return !predicate(...args)
  }
}

export default negate
