import isEmpty from '../predicate/isEmpty'
import isArray from '../predicate/isArray'

/**
 * 如果value不是数组，将value塞入一个空数组，再返回
 * @param {*} value 任意值
 * @returns {array}
 */
export default function castArray (...args) {
  if (isEmpty(args)) {
    return []
  }

  const [value] = args

  return isArray(value) ? value : [value]
}
