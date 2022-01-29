import overEvery from '../function/overEvery'
import eq from './eq'
import gt from './gt'

/**
 * 检查value否是大于并抽象等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const gte = overEvery([eq, gt])

export default gte
