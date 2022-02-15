/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isFunction.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 23:34:21
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:53
 * -----
 */

import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'

/**
 * 检查value是否是函数
 * @param {*} value 任意值
 */
function isFunction (value) {
  return isType(value, PRIMITIVE_TYPE.FUNCTION)
}

export default isFunction
