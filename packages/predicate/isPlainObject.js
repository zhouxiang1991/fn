/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isPlainObject.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 13:19:50
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:08
 * -----
 */

import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'

/**
 * 检查value是否是纯对象
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isPlainObject (value) {
  return isType(value, PRIMITIVE_TYPE.OBJECT)
}

export default isPlainObject
