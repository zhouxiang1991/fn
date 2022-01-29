import overEvery from '../function/overEvery'
import seq from './seq'
import gt from './gt'

/**
 * 检查value否是大于并严格等于other
 * @param {*} value 任意值
 * @param {*} other 其他值
 * @returns {boolean}
 */
const gtse = overEvery([seq, gt])

export default gtse
