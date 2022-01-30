/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: castArray.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:42:01
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:44
 * -----
 */

import isEmpty from '../predicate/isEmpty'
import isArray from '../predicate/isArray'

/**
 * 如果value不是数组，将value塞入一个空数组，再返回
 * @param {*} value 任意值
 * @returns {array}
 */
export default function castArray (...args) {
  if (isEmpty(args)) {
    return []
  }

  const [value] = args

  return isArray(value) ? value : [value]
}
