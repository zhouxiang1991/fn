import curry from '#packages/function/curry'
import prop from '#packages/_internal/prop'

/**
 * 获取对象的某个属性
 * @private
 * @param {object} object 对象
 * @param {(string|string[])} path 路径
 * @param {*}
 */
const propertyOf = curry(prop, 2)

export default propertyOf
