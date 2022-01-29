/**
 * 延迟wait毫秒后调用func，调用时任何附加的参数会传给func
 * @async
 * @param {function} func 延迟调用的函数
 * @param {number} wait 要延迟的毫秒数
 * @param {...*} args func函数参数
 */
async function delay (func, wait, ...args) {
  await new Promise(r => setTimeout(r, wait))

  return func(...args)
}

export default delay
