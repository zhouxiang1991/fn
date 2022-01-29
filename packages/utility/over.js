import presetArg from '#packages/function/presetArg'
import castArray from '#packages/utility/castArray'

/**
 * 创建一个函数，传入提供的参数的函数并调用 iteratees 返回结果
 * @param {(function|function[])} iteratees 要调用的 iteratees
 * @returns {function}
 */
function over (iteratees) {
  return function (...args) {
    const _iteratees = castArray(iteratees)

    return _iteratees.map(presetArg(...args))
  }
}

export default over
