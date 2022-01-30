/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isType.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 23:20:02
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 10:23:39
 * -----
 */

import getType from '#packages/_internal/getType'

/**
 * 判断value是否是type类型
 * @param {*} value 任意值
 * @param {string} type
 */
function isType (value, type) {
  return getType(value) === type
}

export default isType
