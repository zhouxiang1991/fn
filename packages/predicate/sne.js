import negate from '../function/negate'
import seq from './seq'

/**
 * 检查value和other是否严格不相等
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const sne = negate(seq)

export default sne
