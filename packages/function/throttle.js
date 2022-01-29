/**
 * 节流函数，在delay秒内最多执行fn一次的函数
 * @param {function} fn 回掉函数
 * @param {number} delay 毫秒数
 * @returns {function}
 */
function throttle (fn, delay = 100) {
  let timer
  let lastArg

  return (...args) => {
    lastArg = args

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, lastArg || args)
        timer = null
      }, delay)
    }
  }
}

export default throttle
