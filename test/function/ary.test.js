import assert from 'assert'
import ary from '#packages/function/ary'

describe('ary', () => {
  it('应该返回3', () => {
    const fn = ary((a, b = 1) => a + b, 2)

    assert.strictEqual(fn(1, 2), 3)
  })
  it('应该返回4', () => {
    const fn = ary((a, b = 1) => a + b)(2)

    assert.strictEqual(fn(2, 2), 4)
  })
})
