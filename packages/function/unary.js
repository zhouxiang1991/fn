import ary from '#packages/function/ary'
import curry, { _ } from '#packages/function/curry'

/**
 * 创建一个最多接受一个参数的函数，忽略多余的参数。
 * @param {function} func  要处理的函数
 * @returns {function}
 */
const unary = curry(ary, 2, _, 1)

export default unary
