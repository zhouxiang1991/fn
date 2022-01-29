/**
 * 获取toStringTag
 * @private
 * @param {*} value 任意值
 * @returns {string}
 */
function getTag (value) {
  return {}.toString.call(value)
}

export default getTag
