/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: negate.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:36:31
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:13
 * -----
 */

/**
 * 创建一个函数，该函数返回predicate函数调用结果取反后的值
 * @param {function} predicate 断言函数
 * @returns {function}
 */
function negate (predicate) {
  return function (...args) {
    return !predicate(...args)
  }
}

export default negate
