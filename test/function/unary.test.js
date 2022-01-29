import assert from 'assert'
import unary from '#packages/function/unary'

describe('unary', () => {
  it('应该返回2', () => {
    const fn = unary((a, b = 1) => a + b)

    assert.strictEqual(fn(1, 2), 2)
  })
})
