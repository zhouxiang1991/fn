import assert from 'assert'
import presetArg from '#packages/function/presetArg'
import identity from '#packages/utility/identity'

describe('presetArg', () => {
  it('应该返回1', () => {
    assert.strictEqual(presetArg(1)(identity), 1)
  })
})
