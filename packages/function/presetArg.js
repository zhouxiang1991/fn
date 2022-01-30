/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: presetArg.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:27:55
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:34
 * -----
 */

/**
 * 创建一个函数，args将会传入func
 * @param {...*} args 预设的参数
 * @returns {function}
 */
function presetArg (...args) {
  return function (func) {
    return func(...args)
  }
}

export default presetArg
