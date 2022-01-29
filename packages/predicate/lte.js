import overEvery from '../function/overEvery'
import eq from './eq'
import lt from './lt'

/**
 * 检查value否是小于并抽象等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const lte = overEvery([eq, lt])

export default lte
