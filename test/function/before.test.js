import assert from 'assert'
import before from '#packages/function/before'
import identity from '#packages/utility/identity'

describe('before', () => {
  it('应该返回1', () => {
    const fn = before(2, identity)

    assert.strictEqual(fn(1), 1)
  })
  it('应该返回2', () => {
    const fn = before(2, identity)

    fn(1)
    assert.strictEqual(fn(2), 1)
  })
  it('应该返回3', () => {
    const fn = before(3, identity)

    fn(2)
    fn(3)
    assert.strictEqual(fn(1), 3)
  })
})
