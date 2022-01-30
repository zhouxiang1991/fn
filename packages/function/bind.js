/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: bind.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 0:05:31
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:02:32
 * -----
 */

import curry from '#packages/function/curry'

/**
 * 创建一个函数。
 * self绑定func函数中的this。
 * func函数会接收partials附加参数。
 * @param {function} func 需要绑定self的函数
 * @param {object} self 对象
 * @param {...} partials 其他参数，支持占位符_
 * @returns {function}
 */
function bind (func, self, ...partials) {
  return curry(func.bind(self), func.length)(...partials)
}

export default bind
