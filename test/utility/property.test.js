import assert from 'assert'
import property from '#packages/utility/property'

describe('property', () => {
  it('应该返回1', () => {
    const result = property('a')({ a: 1 })

    assert.strictEqual(result, 1)
  })
  it('应该返回2', () => {
    const result = property('a[0]')({ a: [2] })

    assert.strictEqual(result, 2)
  })
  it('应该返回3', () => {
    const result = property(['a', '0', 'a'])({ a: [{ a: 3 }] })

    assert.strictEqual(result, 3)
  })
  it('应该返回4', () => {
    const result = property('a[0].a.b')({ a: [{ a: { b: 4 } }] })

    assert.strictEqual(result, 4)
  })
  it('应该返回5', () => {
    const result = property('a.0.a.b')({ a: [{ a: { b: 5 } }] })

    assert.strictEqual(result, 5)
  })
})
