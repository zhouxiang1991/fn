/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: pipe.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 23:29:49
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:03:29
 * -----
 */

/**
 * 创建一个函数。
 * 该函数接收一个函数列表。
 * 顺序执行，上一个函数的返回值作为下一个函数的入参
 * @param {function[]} fns 待执行函数列表
 * @returns {function}
 */
function pipe (...fns) {
  return function (arg) {
    return fns.reduce((res, cb) => cb(res), arg)
  }
}

export default pipe
