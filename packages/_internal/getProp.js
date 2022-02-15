/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: prop.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 11:40:17
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:02:13
 * -----
 */

import isArray from '#packages/predicate/isArray'
import identity from '#packages/utility/identity'

/**
 * 获取对象的某个属性
 * @private
 * @param {object} object 对象
 * @param {(string|string[])} path 路径
 * @param {*}
 */
function getProp (object, path) {
  const _path = isArray(path) ? path.join('.') : path
  const paths = _path
    .replace(/\[([^[]]*)\]/g, '.$1.')
    .split('.')
    .filter(identity)

  return paths.reduce((prev, cur, index) => prev && prev[cur], object)
}

export default getProp
