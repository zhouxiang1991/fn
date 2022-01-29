import negate from '../function/negate'
import eq from './eq'

/**
 * 检查value和other是否抽象相等
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const ne = negate(eq)

export default ne
