/**
 * 检查value和other是否抽象相等
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
function eq (value, other) {
  // eslint-disable-next-line eqeqeq
  return value == other
}

export default eq
