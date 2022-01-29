import curry, { _ } from '#packages/function/curry'
import keys from '#packages/object/keys'
import isArray from '#packages/predicate/isArray'
import isPlainObject from '#packages/predicate/isPlainObject'

/**
 * 深比较两个数据
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @param {function} predicate 断言函数
 * @returns {boolean}
 */
function isEqual (value, other, predicate = (a, b) => a === b) {
  if (predicate(value, other)) {
    return true
  } else if (
    isPlainObject(value) ||
    isArray(value)
  ) {
    const valueKeys = keys(value)
    const otherKeys = keys(other)

    if (valueKeys.length !== otherKeys.length) {
      return false
    }

    if (!valueKeys.length) {
      return true
    }

    return valueKeys.every(key => isEqual(
      value[key],
      other[key],
      curry(predicate, 5, _, _, key, value, other),
    ))
  } else {
    return false
  }
}

export default isEqual
