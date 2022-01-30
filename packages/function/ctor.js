/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: ctor.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 13:41:40
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:02:49
 * -----
 */

/**
 * 创建一个函数，该函数将会new Class
 * @param {object} Class={} 类
 */
function ctor (Class) {
  return function (...args) {
    return new Class(...args)
  }
}

export default ctor
