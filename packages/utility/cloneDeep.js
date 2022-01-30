/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: cloneDeep.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 11:02:30
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:05:47
 * -----
 */

import { PRIMITIVE_TYPE } from '#packages/config'
import keys from '#packages/object/keys'
import isUndef from '#packages/predicate/isUndef'
import noop from '#packages/utility/noop'
import cloneRegExp from '#packages/_internal/cloneRegExp'
import getType from '#packages/_internal/getType'

/**
 * 深拷贝
 * @param {*} value 待拷贝值
 * @param {function} customizer 自定义复制函数
 * @returns {*} 拷贝值
 */
function cloneDeep (value, customizer = noop) {
  const type = getType(value)
  let cloned = customizer(value)
  const clonedIsUndef = isUndef(cloned)

  switch (type) {
    case PRIMITIVE_TYPE.DATE : {
      if (clonedIsUndef) {
        cloned = new Date(value)
      }

      break
    }

    case PRIMITIVE_TYPE.REGEXP : {
      if (clonedIsUndef) {
        cloned = cloneRegExp(value)
      }

      break
    }

    case PRIMITIVE_TYPE.OBJECT : {
      if (clonedIsUndef) {
        cloned = keys(value).reduce((sum, key) => {
          sum[key] = cloneDeep(value[key])

          return sum
        }, {})
      }

      break
    }

    case PRIMITIVE_TYPE.ARRAY : {
      if (clonedIsUndef) {
        cloned = value.reduce((sum, v, key) => {
          sum.push(cloneDeep(v))

          return sum
        }, [])
      }

      break
    }

    default : {
      cloned = value

      break
    }
  }

  return cloned
}

export default cloneDeep
