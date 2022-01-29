import assert from 'assert'
import times from '#packages/function/times'

describe('times', () => {
  it('应该返回[0,1]', () => {
    assert.deepStrictEqual(times(2, i => i), [0, 1])
  })
})
