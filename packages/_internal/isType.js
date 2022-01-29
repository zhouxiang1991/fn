import getType from '#packages/_internal/getType'

/**
 * 判断value是否是type类型
 * @param {*} value 任意值
 * @param {string} type
 */
function isType (value, type) {
  return getType(value) === type
}

export default isType
