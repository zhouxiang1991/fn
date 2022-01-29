import assert from 'assert'
import presetFn from '#packages/function/presetFn'
import identity from '#packages/utility/identity'

describe('presetFn', () => {
  it('应该返回1', () => {
    assert.strictEqual(presetFn(identity)(1), 1)
  })
})
