/**
 * 创建一个函数，该函数将会new Class
 * @param {object} Class={} 类
 */
function ctor (Class) {
  return function (...args) {
    return new Class(...args)
  }
}

export default ctor
