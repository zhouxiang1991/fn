/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: property.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 16:02:04
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:17
 * -----
 */

import curry from '#packages/function/curry'
import flip from '#packages/function/flip'
import getProp from '#packages/_internal/getProp'

/**
 * 创建一个返回给定对象的 path 的值的函数
 * @param {(string|string[])} path 路径
 * @returns {function}
 */
function property (path) {
  return curry(flip(getProp), 2, path)
}

export default property
