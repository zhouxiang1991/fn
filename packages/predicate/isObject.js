/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isObject.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 11:19:46
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:06
 * -----
 */

import { PRIMITIVE_TYPE } from '../config/index'

/**
 * 检查value否是Object
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isObject (value) {
  const type = typeof value
  const yes = [
    PRIMITIVE_TYPE.FUNCTION,
    PRIMITIVE_TYPE.OBJECT,
  ].includes(type)

  return yes
}

export default isObject
