import assert from 'assert'
import once from '#packages/function/once'
import identity from '#packages/utility/identity'

describe('once', () => {
  it('应该返回1', () => {
    const fn = once(identity)

    assert.strictEqual(fn(1), 1)
  })
  it('应该返回2', () => {
    const fn = once(identity)

    fn(1)
    assert.strictEqual(fn(2), 1)
  })
})
