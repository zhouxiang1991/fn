/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: result.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 23:36:54
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:24
 * -----
 */

import isFunction from '../predicate/isFunction'

/**
 * 如果value是函数则调用函数并返回结果，其他情况则返回value
 * @param {*} value 任意值
 * @param {...*} args value是函数时的调用参数
 * @returns {*}
 */
function result (value, ...args) {
  return isFunction(value)
    ? value(...args)
    : value
}

export default result
