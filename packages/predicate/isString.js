import { PRIMITIVE_TYPE } from '../config/index'
import isType from '#packages/_internal/isType'
import curry, { _ } from '#packages/function/curry'

/**
 * 检查value是否是字符串
 * @param {*} value 任意值
 * @returns {boolean}
 */
const isString = curry(isType, 2, _, PRIMITIVE_TYPE.STRING)

export default isString
