/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: getType.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 13:38:20
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:01:51
 * -----
 */

import getTag from './getTag'

/**
 * 从tag中获取原始数据类型字符串
 * @private
 * @param {*} value 任意值
 * @returns {string}
 */
function getType (value) {
  const tag = getTag(value)

  return tag.slice(8, -1).toLowerCase()
}

export default getType
