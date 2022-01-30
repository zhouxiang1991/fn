/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: spread.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:05:26
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:49
 * -----
 */

/**
 * 创建一个函数，func函数本来多个参数传递，调用func时允许将参数按照数组传递
 * @param {function} func 待调用函数
 * @returns {function}
 */
function spread (func) {
  return function (params) {
    return func(...params)
  }
}

export default spread
