import before from '#packages/function/before'

/**
 * 创建一个只能调用 func 一次的函数。
 * 重复调用返回第一次调用的结果。
 * func 调用时， this 绑定到创建的函数，并传入对应参数。
 * @param {function} func 限制执行的函数
 * @returns {function}
 */
const once = before(2)

export default once
