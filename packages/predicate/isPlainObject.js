import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'
import curry, { _ } from '#packages/function/curry'

/**
 * 检查value是否是纯对象
 * @param {*} value 任意值
 * @returns {boolean}
 */
const isPlainObject = curry(isType, 2, _, PRIMITIVE_TYPE.OBJECT)

export default isPlainObject
