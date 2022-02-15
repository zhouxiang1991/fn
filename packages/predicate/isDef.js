/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isDef.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 14:06:49
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:41
 * -----
 */

import isUndef from '#packages/predicate/isUndef'

/**
 * 检查value和other是否抽象相等
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
function isDef (value) {
  return !isUndef(value)
}

export default isDef
