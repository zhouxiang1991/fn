/**
 * 创建一个函数，依次调用predicates中的每个函数，全部返回true则返回true否则返回false
 * @param {function[]} predicates 断言函数列表
 * @returns {function}
 */
function overEvery (predicates) {
  return function (...args) {
    return predicates.every(predicate => predicate(...args))
  }
}

export default overEvery
