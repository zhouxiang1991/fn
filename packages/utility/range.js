/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: range.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 11:14:16
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:22
 * -----
 */

import isUndef from '#packages/predicate/isUndef'

/**
 * 创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。
 * 如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。
 * 如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step
 * @param {number} [start]=0 开始的范围
 * @param {number} end 结束的范围
 * @param {number} step=1 范围的增量 或者 减量
 */
function range (start = 0, end, step) {
  let _start = start
  let _end = end

  if (isUndef(end)) {
    _end = _start
    _start = 0
  }

  const _step = isUndef(step)
    ? _start < _end
      ? 1
      : -1
    : step
  let index = 0
  let length = Math.max(
    Math.abs(Math.ceil((_end - _start) / (_step || 1))),
    0,
  )
  const result = new Array(length)

  while (length--) {
    result[index++] = _start
    _start += _step
  }

  return result
}

export default range
