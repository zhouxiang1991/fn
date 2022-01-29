import negate from '#packages/function/negate'
import isUndef from '#packages/predicate/isUndef'

/**
 * 检查value和other是否抽象相等
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const isDef = negate(isUndef)

export default isDef
