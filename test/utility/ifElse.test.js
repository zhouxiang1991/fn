import assert from 'assert'
import ifElse from '#packages/utility/ifElse'
import isNumber from '#packages/predicate/isNumber'
import isString from '#packages/predicate/isString'

describe('ifElse', () => {
  it('应该返回1', () => {
    assert.strictEqual(ifElse(isNumber(1), 1, 2), 1)
  })
  it('应该返回2', () => {
    assert.strictEqual(ifElse(isNumber('1'), 1, 2), 2)
  })
  it('应该返回3', () => {
    assert.strictEqual(ifElse(isString('1'), v => 3, v => 4), 3)
  })
  it('应该返回4', () => {
    assert.strictEqual(ifElse(isString(1), v => 3, v => 4), 4)
  })
})
