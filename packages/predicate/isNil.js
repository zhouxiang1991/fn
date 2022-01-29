import overEvery from '../function/overEvery'
import isNull from './isNull'
import isUndef from './isUndef'

/**
 * 检查value是否是undefined或null
 * @param {*} value 任意值
 * @returns {boolean}
 */
const isNil = overEvery([isNull, isUndef])

export default isNil
