/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isEmpty.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 11:15:48
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:44
 * -----
 */

import isArray from './isArray'
import isPlainObject from './isPlainObject'
import keys from '#packages/object/keys'

/**
 * 检查value是否是空数组或者空对象
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isEmpty (value) {
  if (isArray(value)) {
    return !value.length
  } else if (isPlainObject(value)) {
    return !keys(value).length
  }

  return true
}

export default isEmpty
