/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: once.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 14:03:07
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:18
 * -----
 */

import before from '#packages/function/before'

/**
 * 创建一个只能调用 func 一次的函数。
 * 重复调用返回第一次调用的结果。
 * func 调用时， this 绑定到创建的函数，并传入对应参数。
 * @param {function} func 限制执行的函数
 * @returns {function}
 */
function once (func) {
  return before(2, func)
}

export default once
