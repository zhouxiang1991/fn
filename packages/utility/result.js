import isFunction from '../predicate/isFunction'

/**
 * 如果value是函数则调用函数并返回结果，其他情况则返回value
 * @param {*} value 任意值
 * @param {...*} args value是函数时的调用参数
 * @returns {*}
 */
function result (value, ...args) {
  return isFunction(value)
    ? value(...args)
    : value
}

export default result
