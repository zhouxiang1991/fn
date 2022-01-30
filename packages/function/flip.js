/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: flip.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:47:39
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:10
 * -----
 */

/**
 * 创建一个函数，调用func时候接收翻转的参数。
 * @param {function} func 待调用函数
 * @returns {function}
 */
function flip (func) {
  return function (...args) {
    return func(...args.reverse())
  }
}

export default flip
