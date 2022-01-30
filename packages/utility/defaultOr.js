/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: defaultOr.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 11:08:04
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:52
 * -----
 */

import isFunction from '../predicate/isFunction'
import result from './result'

/**
 * 检查value，以确定一个默认值是否应被返回。如果value为emptyValues中的某一个 ，那么返回defaultValue默认值。
 * @param {*} value 任意值
 * @param {*} defaultValue 默认值，可以是函数
 * @param {object} option={} 选项配置
 * @param {string[]} option.emptyValues=[undefined, null] 空值数组
 * @param {function} option.predicate 断言函数
 */
function defaultOr (
  value,
  defaultValue,
  {
    emptyValues = [undefined, null],
    predicate,
  } = {},
) {
  const isEmptyValue = isFunction(predicate)
    ? predicate.call(this, value)
    : emptyValues.includes(value)

  return isEmptyValue
    ? result.call(this, defaultValue)
    : value
}

export default defaultOr
