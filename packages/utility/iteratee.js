/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: iteratee.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 15:19:41
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:06:00
 * -----
 */

import isArray from '../predicate/isArray'
import isPlainObject from '../predicate/isPlainObject'
import isString from '../predicate/isString'
import keys from '#packages/object/keys'

/**
 * 创建一个函数
 * 该函数接口接收一个对象obj
 * 如果value是字符串，则函数返回obj[value]
 * 如果value是字符串数据，则函数遍历obj中不同value元素都是true，则返回true，否则返回false
 * 如果value是对象，则value和obj有相同的属性字段并且属性值都一样，则返回true，否则返回false
 * @param {(string|string[]|object)} value
 */
function iteratee (value) {
  switch (true) {
    case isArray(value) : {
      return obj => value.every(key => obj[key])
    }

    case isPlainObject(value) : {
      return obj => keys(value)
        .every(key => obj[key] === value[key])
    }

    case isString(value) : {
      return obj => !!obj[value]
    }

    default : {
      return () => false
    }
  }
}

export default iteratee
