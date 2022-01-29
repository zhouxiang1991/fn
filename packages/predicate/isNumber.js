import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'
import curry, { _ } from '#packages/function/curry'

/**
 * 检查value是否是数字
 * @param {*} value 任意值
 * @returns {boolean}
 */
const isNumber = curry(isType, 2, _, PRIMITIVE_TYPE.NUMBER)

export default isNumber
