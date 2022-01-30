/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: presetFn.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:30:05
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:38
 * -----
 */

/**
 * 创建一个函数，args将会传入func
 * @param {function} func 预设的函数
 * @returns {function}
 */
function presetFn (func) {
  return function (...args) {
    return func(...args)
  }
}

export default presetFn
