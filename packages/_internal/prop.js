import isArray from '#packages/predicate/isArray'
import identity from '#packages/utility/identity'

/**
 * 获取对象的某个属性
 * @private
 * @param {object} object 对象
 * @param {(string|string[])} path 路径
 * @param {*}
 */
function prop (object, path) {
  const _path = isArray(path) ? path.join('.') : path
  const paths = _path
    .replace(/\[([^[]]*)\]/g, '.$1.')
    .split('.')
    .filter(identity)

  return paths.reduce((prev, cur, index) => prev && prev[cur], object)
}

export default prop
