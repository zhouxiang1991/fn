/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isBoolean.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:07:18
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:31
 * -----
 */

import { PRIMITIVE_TYPE } from '../config/index'
import curry, { _ } from '#packages/function/curry'
import isType from '#packages/_internal/isType'

/**
 * 检查value是否是boolean
 * @param {*} value 任意值
 * @returns {boolean}
 */
const isBoolean = curry(isType, 2, _, PRIMITIVE_TYPE.DATE)

export default isBoolean
