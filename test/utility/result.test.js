import assert from 'assert'
import result from '#packages/utility/result'

describe('result', () => {
  it('yes', () => {
    assert.strictEqual(result(1), 1)
    assert.strictEqual(result(() => 2), 2)
  })
})
