import assert from 'assert'
import isArray from '#packages/predicate/isArray'

describe('isArray', () => {
  it('yes', () => {
    assert.strictEqual(isArray([]), true)
    assert.strictEqual(isArray({}), false)
    assert.strictEqual(isArray(1), false)
  })
})
