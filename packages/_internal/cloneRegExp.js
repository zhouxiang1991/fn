const reFlags = /\w*$/

/**
 * 复制正则表达式
 * @private
 * @param {object} regexp 待复制正则表达式
 * @returns {object}
 */
function cloneRegExp (regexp) {
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp))

  result.lastIndex = regexp.lastIndex

  return result
}

export default cloneRegExp
