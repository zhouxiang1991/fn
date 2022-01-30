/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: method.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 22:39:21
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:04
 * -----
 */

import invoke from '#packages//object/invoke'

/**
 * 创建一个函数，该函数接收一个对象参数object
 * @param {(string|string[])} path 调用函数所在对象object的路径
 * @param {...*} args 传递给调用函数的参数
 * @returns {function}
 */
function method (path, ...args) {
  return function (object) {
    return invoke(object, path, ...args)
  }
}

export default method
