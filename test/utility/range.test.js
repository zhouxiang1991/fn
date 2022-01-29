import assert from 'assert'
import range from '#packages/utility/range'

describe('range', () => {
  it('应该返回[0,1]', () => {
    assert.deepStrictEqual(range(2), [0, 1])
  })
  it('应该返回[0,-1]', () => {
    assert.deepStrictEqual(range(-2), [0, -1])
  })
  it('应该返回[0,1,2,3]', () => {
    assert.deepStrictEqual(range(1, 3), [1, 2])
  })
  it('应该返回[1, 3, 5, 7, 9]', () => {
    assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9])
  })
  it('应该返回[1, 1]', () => {
    assert.deepStrictEqual(range(1, 3, 0), [1, 1])
  })
  it('应该返回[]', () => {
    assert.deepStrictEqual(range(0), [])
  })
})
