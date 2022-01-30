/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: debounce.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:53:08
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:02:59
 * -----
 */

/**
 * 创建一个debounced（防抖动）函数，该函数会从上一次被调用后，延迟delay毫秒后调用fn方法
 * @param {function} fn 回掉函数
 * @param {number} delay 毫秒数
 * @returns {function}
 */
function debounce (fn, delay = 100) {
  let timer

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default debounce
