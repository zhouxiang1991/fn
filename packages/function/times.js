import identity from '#packages/utility/identity'

/**
 * 调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)
 * @param {number} n 调用 iteratee 的次数
 * @param {function}  iteratee 每次迭代调用的函数
 */
function times (n, iteratee = identity) {
  return Array(n).fill()
    .map((_, i) => iteratee(i))
}

export default times
