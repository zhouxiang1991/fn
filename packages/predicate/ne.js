/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: ne.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:03:31
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:30
 * -----
 */

import eq from './eq'

/**
 * 检查value和other是否抽象相等
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
function ne (value, other) {
  return !eq(value, other)
}

export default ne
