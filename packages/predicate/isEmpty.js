import isArray from './isArray'
import isPlainObject from './isPlainObject'
import keys from '#packages/object/keys'

/**
 * 检查value是否是空数组或者空对象
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isEmpty (value) {
  if (isArray(value)) {
    return !value.length
  } else if (isPlainObject(value)) {
    return !keys(value).length
  }

  return true
}

export default isEmpty
