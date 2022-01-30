/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isNumber.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:31:54
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 10:31:16
 * -----
 */

import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'
import curry, { _ } from '#packages/function/curry'

/**
 * 检查value是否是数字
 * @param {*} value 任意值
 * @returns {boolean}
 */
const isNumber = curry(isType, 2, _, PRIMITIVE_TYPE.NUMBER)

export default isNumber
