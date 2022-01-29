import assert from 'assert'
import over from '#packages/utility/over'

describe('over', () => {
  it('应该返回[true, \'1\']', () => {
    assert.deepStrictEqual(over([Boolean, String])(1), [true, '1'])
  })
})
