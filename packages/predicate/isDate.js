import { PRIMITIVE_TYPE } from '../config'
import curry, { _ } from '#packages/function/curry'
import isType from '#packages/_internal/isType'

/**
 * 检查value是否是date
 * @param {*} value 任意值
 */
const isDate = curry(isType, 2, _, PRIMITIVE_TYPE.DATE)

export default isDate
