/**
 * @file 原始数据类型枚举值
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: primitiveType.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 11:22:18
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 9:17:36
 * -----
 */

/**
 * 原始数据类型字符枚举值
 * @constant {object}
 * @enum {string}
 */
const PRIMITIVE_TYPE = {
  OBJECT   : 'object',
  FUNCTION : 'function',
  BOOLEAN  : 'boolean',
  STRING   : 'string',
  NUMBER   : 'number',
  NULL     : 'null',
  UNDEFINED: 'undefined',
  DATE     : 'date',
  REGEXP   : 'regexp',
  ARRAY    : 'array',
}

export {
  PRIMITIVE_TYPE,
}
