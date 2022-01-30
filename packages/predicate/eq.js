/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: eq.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:49:53
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:11
 * -----
 */

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
