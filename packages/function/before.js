/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: before.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:54:53
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:02:29
 * -----
 */

import curry from '#packages/function/curry'

/**
 * 创建一个调用fn的函数。
 * 该函数的this绑定到fn，调用次数不超过n次。
 * 之后再调用这个函数，将返回一次最后调用fn的结果。
 * @param {number} n 超过多少次不再调用fn。
 * @param {function} fn 限制执行的函数。
 * @returns {function}
 */
function before (n, fn) {
  let _n = n
  let result

  return function (...args) {
    if (--_n > 0) {
      result = fn.call(this, ...args)
    }

    return result
  }
}

export default before
