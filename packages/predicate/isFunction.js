import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'
import curry, { _ } from '#packages/function/curry'

/**
 * 检查value是否是函数
 * @param {*} value 任意值
 */
const isFunction = curry(isType, 2, _, PRIMITIVE_TYPE.FUNCTION)

export default isFunction
