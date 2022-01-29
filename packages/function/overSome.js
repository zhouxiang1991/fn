/**
 * 创建一个函数，依次调用predicates中的每个函数，有一个返回true则返回true否则返回false
 * @param {function[]} predicates 断言函数列表
 * @returns {function}
 */
function overSome (predicates) {
  return function (...args) {
    return predicates.some(predicate => predicate(...args))
  }
}

export default overSome
