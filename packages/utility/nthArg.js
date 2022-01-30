/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: nthArg.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 10:58:18
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:12
 * -----
 */

/**
 * 建一个函数，这个函数返回第 n 个参数。如果 n为负数，则返回从结尾开始的第n个参数
 * @param {number} n=0 要返回参数的索引值
 * @returns {(*|*[])}
 */
function nthArg (n = 0) {
  return function (...args) {
    if (n >= 0) {
      return args[n]
    }

    return args[args.length + n]
  }
}

export default nthArg
