import { PRIMITIVE_TYPE } from '../config/index'

/**
 * 检查value否是Object
 * @param {*} value 任意值
 * @returns {boolean}
 */
function isObject (value) {
  const type = typeof value
  const yes = [
    PRIMITIVE_TYPE.FUNCTION,
    PRIMITIVE_TYPE.OBJECT,
  ].includes(type)

  return yes
}

export default isObject
