/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: over.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:16:18
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:14
 * -----
 */

import presetArg from '#packages/function/presetArg'
import castArray from '#packages/utility/castArray'

/**
 * 创建一个函数，传入提供的参数的函数并调用 iteratees 返回结果
 * @param {(function|function[])} iteratees 要调用的 iteratees
 * @returns {function}
 */
function over (iteratees) {
  return function (...args) {
    const _iteratees = castArray(iteratees)

    return _iteratees.map(presetArg(...args))
  }
}

export default over
