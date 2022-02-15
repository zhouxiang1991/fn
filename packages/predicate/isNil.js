/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isNil.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:20:48
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:58
 * -----
 */
import isNull from './isNull'
import isUndef from './isUndef'

/**
 * 检查value是否是undefined或null
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isNil (value) {
  return isNull(value) || isUndef(value)
}

export default isNil
