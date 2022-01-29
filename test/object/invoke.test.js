import assert from 'assert'
import invoke from '#packages/object/invoke'

describe('invoke', () => {
  it('应该返回2', () => {
    assert.strictEqual(invoke({ a: a => a + 1 }, 'a', 1), 2)
  })
})
