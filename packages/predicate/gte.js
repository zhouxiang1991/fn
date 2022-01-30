/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: gte.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:14:40
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:20
 * -----
 */

import overEvery from '../function/overEvery'
import eq from './eq'
import gt from './gt'

/**
 * 检查value否是大于并抽象等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const gte = overEvery([eq, gt])

export default gte
