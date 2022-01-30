/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isDate.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 23:17:06
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:33
 * -----
 */

import { PRIMITIVE_TYPE } from '../config'
import curry, { _ } from '#packages/function/curry'
import isType from '#packages/_internal/isType'

/**
 * 检查value是否是date
 * @param {*} value 任意值
 */
const isDate = curry(isType, 2, _, PRIMITIVE_TYPE.DATE)

export default isDate
