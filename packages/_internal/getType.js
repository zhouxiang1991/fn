import getTag from './getTag'

/**
 * 从tag中获取原始数据类型字符串
 * @private
 * @param {*} value 任意值
 * @returns {string}
 */
function getType (value) {
  const tag = getTag(value)

  return tag.slice(8, -1).toLowerCase()
}

export default getType
