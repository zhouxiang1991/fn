import assert from 'assert'
import isEqual from '#packages/predicate/isEqual'

describe('isEqual', () => {
  it('yes', () => {
    assert.strictEqual(isEqual(1, 1), true)
    assert.strictEqual(isEqual(1, 0), false)
    assert.strictEqual(isEqual({ a: 1 }, { a: 1 }), true)
    assert.strictEqual(isEqual([1], [1]), true)
    assert.strictEqual(isEqual([1], [1, 1]), false)
    assert.strictEqual(isEqual({ a: 1 }, { a: 2 }), false)
    assert.strictEqual(isEqual({ a: 1 }, {}), false)
    assert.strictEqual(isEqual({ a: 1 }, []), false)
    assert.strictEqual(isEqual({}, {}), true)
    assert.strictEqual(isEqual([], []), true)
    assert.strictEqual(isEqual({ a: { b: ['1'] } }, { a: { b: [1] } }, (a, b, key) => {
      return +a === +b
    }), true)
  })
})
