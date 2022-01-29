import assert from 'assert'
import defaultOr from '#packages/utility/defaultOr'

describe('defaultOr', () => {
  it('yes', () => {
    assert.strictEqual(defaultOr(1), 1)
    assert.strictEqual(defaultOr(null, 2), 2)
    assert.strictEqual(defaultOr(null, () => 3), 3)
    assert.strictEqual(defaultOr(undefined, 4), 4)
    assert.strictEqual(defaultOr(2, 5, { emptyValues: [2] }), 5)
    assert.strictEqual(defaultOr(1, 6, { predicate: value => value === 1 }), 6)
  })
})
