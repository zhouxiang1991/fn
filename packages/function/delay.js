/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: delay.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:56:46
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:06
 * -----
 */

/**
 * 延迟wait毫秒后调用func，调用时任何附加的参数会传给func
 * @async
 * @param {function} func 延迟调用的函数
 * @param {number} wait 要延迟的毫秒数
 * @param {...*} args func函数参数
 */
async function delay (func, wait, ...args) {
  await new Promise(r => setTimeout(r, wait))

  return func(...args)
}

export default delay
