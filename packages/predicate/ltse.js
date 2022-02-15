/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: ltse.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:17:01
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:25
 * -----
 */

import seq from './seq'
import lt from './lt'

/**
 * 检查value否是小于并严格等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
function ltse (value, other) {
  return seq(value, other) || lt(value, other)
}

export default ltse
