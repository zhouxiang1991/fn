/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isString.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:25:16
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 10:30:00
 * -----
 */

import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'

/**
 * 检查value是否是字符串
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isString (value) {
  return isType(value, PRIMITIVE_TYPE.STRING)
}

export default isString
