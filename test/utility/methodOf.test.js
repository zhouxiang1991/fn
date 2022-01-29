import assert from 'assert'
import methodOf from '#packages//utility/methodOf'

describe('methodOf', () => {
  it('yes', () => {
    assert.strictEqual(methodOf({ a: () => 1 })('a'), 1)
    assert.strictEqual(methodOf({ a: { b: () => 2 } })('a.b'), 2)
    assert.strictEqual(methodOf({ a: { b: { c: () => 3 } } })(['a', 'b', 'c']), 3)
    assert.strictEqual(methodOf({ a: [() => 4] })('a[0]'), 4)
    assert.strictEqual(methodOf({ a: [() => 5] })(['a', '0']), 5)
  })
})
