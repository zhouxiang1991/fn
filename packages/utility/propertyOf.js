/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: propertyOf.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 11:38:44
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:19
 * -----
 */

import curry from '#packages/function/curry'
import prop from '#packages/_internal/prop'

/**
 * 获取对象的某个属性
 * @private
 * @param {object} object 对象
 * @param {(string|string[])} path 路径
 * @param {*}
 */
const propertyOf = curry(prop, 2)

export default propertyOf
