/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: unary.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:50:46
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:58
 * -----
 */

import ary from '#packages/function/ary'

/**
 * 创建一个最多接受一个参数的函数，忽略多余的参数。
 * @param {function} func  要处理的函数
 * @returns {function}
 */
const unary = function (func) {
  return ary(func, 1)
}

export default unary
