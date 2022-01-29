import { PRIMITIVE_TYPE } from '../config/index'
import curry, { _ } from '#packages/function/curry'
import isType from '#packages/_internal/isType'

/**
 * 检查value是否是boolean
 * @param {*} value 任意值
 * @returns {boolean}
 */
const isBoolean = curry(isType, 2, _, PRIMITIVE_TYPE.DATE)

export default isBoolean
