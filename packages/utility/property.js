import curry from '#packages/function/curry'
import flip from '#packages/function/flip'
import prop from '#packages/_internal/prop'

/**
 * 创建一个返回给定对象的 path 的值的函数
 * @param {(string|string[])} path 路径
 * @returns {function}
 */
const property = curry(flip(prop), 2)

export default property
