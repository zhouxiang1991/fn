import assert from 'assert'
import isEmpty from '#packages/predicate/isEmpty'

describe('isEmpty', () => {
  it('yes', () => {
    assert.strictEqual(isEmpty({}), true)
    assert.strictEqual(isEmpty([]), true)
    assert.strictEqual(isEmpty([1]), false)
    assert.strictEqual(isEmpty({ a: 1 }), false)
    assert.strictEqual(isEmpty(1), true)
  })
})
