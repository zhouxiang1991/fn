import assert from 'assert'
import nthArg from '#packages/utility/nthArg'

describe('nthArg', () => {
  it('应该返回1', () => {
    assert.strictEqual(nthArg(0)(1), 1)
  })
  it('应该返回2', () => {
    assert.strictEqual(nthArg(1)(1, 2), 2)
  })
  it('应该返回3', () => {
    assert.strictEqual(nthArg(-1)(1, 2, 3), 3)
  })
  it('应该返回4', () => {
    assert.strictEqual(nthArg(-2)(1, 4, 3), 4)
  })
})
