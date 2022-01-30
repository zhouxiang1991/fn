/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: methodOf.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 23:04:05
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:07
 * -----
 */

import invoke from '#packages//object/invoke'

/**
 * 创建一个函数，该函数接收一个属性路径path
 * @param {object} object 对象
 * @param {...*} args 传递给调用函数的参数
 * @returns {function}
 */
function methodOf (object, ...args) {
  return function (path) {
    return invoke(object, path, ...args)
  }
}

export default methodOf
