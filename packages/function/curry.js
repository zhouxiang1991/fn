import times from '#packages/function/times'
import isDef from '#packages/predicate/isDef'

export const _ = { placeholder: true }

export default function curry (fn, arity = fn.length, ...initArgs) {
  function _curry (savedArgs, nextIndex, jumped) {
    return function (...args) {
      let _nextIndex = nextIndex
      const _savedArgs = [...savedArgs]
      let _jumped = jumped

      for (const arg of args) {
        _savedArgs[_nextIndex] = arg
        _nextIndex = _savedArgs.indexOf(_, _nextIndex + 1)
        _nextIndex = _nextIndex === -1 ? arity : _nextIndex
        _jumped = arg === _ ? true : _jumped

        if (_nextIndex === arity) {
          if (_jumped) {
            _nextIndex = _savedArgs.indexOf(_)
            _jumped = false
          } else {
            return fn(..._savedArgs)
          }
        }
      }

      return _curry(_savedArgs, _nextIndex, _jumped)
    }
  }

  const firstArgs = times(arity, i => (isDef(initArgs[i]) ? initArgs[i] : _))

  if (!firstArgs.includes(_)) {
    return fn(...firstArgs)
  }

  return _curry(firstArgs, firstArgs.indexOf(_), false)
}
