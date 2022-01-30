/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: cloneRegExp.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 13:44:19
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:01:35
 * -----
 */

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
