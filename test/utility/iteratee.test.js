import assert from 'assert'
import iteratee from '#packages/utility/iteratee'

describe('iteratee', () => {
  it('应该返回true', () => {
    assert.strictEqual(iteratee('a')({ a: 1 }), true)
  })
  it('应该返回false', () => {
    assert.strictEqual(iteratee('a')({ a: '' }), false)
  })
  it('应该返回false', () => {
    assert.strictEqual(iteratee(['a', 'b'])({ a: '', b: 1 }), false)
  })
  it('应该返回true', () => {
    assert.strictEqual(iteratee(['a', 'b'])({ a: 1, b: 1 }), true)
  })
  it('应该返回true', () => {
    assert.strictEqual(iteratee({ a: 1, b: 2 })({ a: 1, b: 2 }), true)
  })
  it('应该返回false', () => {
    assert.strictEqual(iteratee({ a: 1, b: 2 })({ a: 1, b: 3 }), false)
  })
  it('应该返回false', () => {
    assert.strictEqual(iteratee({ a: 1, b: 2 })({ a: 1, b: 3 }), false)
  })
})
