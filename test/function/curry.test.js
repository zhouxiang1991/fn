import assert from 'assert'
import curry from '#packages/function/curry'

describe('curry', () => {
  it('应该返回123', () => {
    const fn = (a, b, c) => a + b + c
    const curriedFn = curry(fn, 3, '1', '2')

    assert.strictEqual(curriedFn('3'), '123')
  })
  it('应该返回321', () => {
    const fn = (a, b, c) => a + b + c
    const curriedFn = curry(fn, 3)

    assert.strictEqual(curriedFn('3', '2', '1'), '321')
  })
  it('应该返回432', () => {
    const fn = (a, b, c) => a + b + c

    assert.strictEqual(curry(fn, 3, '4', '3', '2'), '432')
  })
})
