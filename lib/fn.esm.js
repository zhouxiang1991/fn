/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: ary.ts
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:49:17
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 10:02:34
 * -----
 */

/**
 * 创建一个调用fn的函数。
 * 调用fn时最多接受n个参数，忽略多出的参数。
 * @param {function} fn 需要被限制参数个数的函数。
 * @param {number} [n=fn.length] 限制的参数数量。
 * @returns {function} 返回新的覆盖函数
 */
function ary (fn, n = fn.length) {
  return function (...args) {
    return fn(...args.slice(0, n))
  }
}

/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isArray.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 13:16:36
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:28
 * -----
 */

/**
 * 检查value是否是数组
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isArray (value) {
  return Array.isArray(value)
}

/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: identity.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 10:48:55
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:54
 * -----
 */

/**
 * 返回首个提供的参数
 * @param {*} value 任意值
 */
function identity (value) {
  return value
}

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

/**
 * 获取对象的某个属性
 * @private
 * @param {object} object 对象
 * @param {(string|string[])} path 路径
 * @param {*}
 */
function getProp (object, path) {
  const _path = isArray(path) ? path.join('.') : path;
  const paths = _path
    .replace(/\[([^[]]*)\]/g, '.$1.')
    .split('.')
    .filter(identity);

  return paths.reduce((prev, cur, index) => prev && prev[cur], object)
}

/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: invoke.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 11:11:12
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:02
 * -----
 */

/**
 * 调用object对象path上的方法
 * @param {object} object={} 对象
 * @param {(string|string[])} path 用来调用的方法路径
 * @param {...*} args 调用对象属性方法时需要传入的参数
 */
function invoke (object = {}, path, ...args) {
  const func = getProp(object, path);

  return func(...args)
}

/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isNull.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:21:19
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:01
 * -----
 */

/**
 * 检查value是否是null
 * @param {*} value 任意值
 */
function isNull (value) {
  return value === null
}

/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isUndef.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:21:53
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:16
 * -----
 */

/**
 * 检查value是否是undefined
 * @param {*} value 任意值
 */
function isUndef (value) {
  return value === undefined
}

/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isNil.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 14:20:48
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:04:58
 * -----
 */

/**
 * 检查value是否是undefined或null
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isNil (value) {
  return isNull(value) || isUndef(value)
}

export { ary, identity, invoke, isArray, isNil };
