(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fn = {}));
})(this, (function (exports) { 'use strict';

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

  exports.isArray = isArray;
  exports.isNil = isNil;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
