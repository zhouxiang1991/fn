import result from '#packages/utility/result'

/**
 * 创建一个函数，该函数先判断predicate的值，为真取value1,为false取value2
 * @param {*} predicate 判断条件
 * @param {*} ifValue predicate为true时返回的值
 * @param {*} elseValue predicate为false时返回的值
 * @returns {function}
 */
function ifElse (predicate, trueValue, elseValue) {
  return result(predicate)
    ? result(trueValue)
    : result(elseValue)
}

export default ifElse
