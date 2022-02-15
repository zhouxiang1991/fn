/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: lte.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:15:45
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:22
 * -----
 */

import eq from './eq'
import lt from './lt'

/**
 * 检查value否是小于并抽象等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
function lte (value, other) {
  return eq(value, other) || lt(value, other)
}

export default lte
