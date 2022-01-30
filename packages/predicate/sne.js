/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: sne.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:04:21
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:35
 * -----
 */

import negate from '../function/negate'
import seq from './seq'

/**
 * 检查value和other是否严格不相等
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const sne = negate(seq)

export default sne
