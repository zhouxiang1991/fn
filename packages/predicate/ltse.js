import overEvery from '../function/overEvery'
import seq from './seq'
import lt from './lt'

/**
 * 检查value否是小于并严格等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const ltse = overEvery([seq, lt])

export default ltse
