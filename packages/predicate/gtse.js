/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: gtse.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:16:37
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:25
 * -----
 */

import seq from './seq'
import gt from './gt'

/**
 * 检查value否是大于并严格等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const gtse = function (value, other) {
  return seq(value, other) || gt(value, other)
}

export default gtse
