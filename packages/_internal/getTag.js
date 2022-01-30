/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: getTag.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 11:35:32
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:02:05
 * -----
 */

/**
 * 获取toStringTag
 * @private
 * @param {*} value 任意值
 * @returns {string}
 */
function getTag (value) {
  return {}.toString.call(value)
}

export default getTag
