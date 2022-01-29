import assert from 'assert'
import rearg from '#packages/function/rearg'

describe('rearg', () => {
  it('应该返回21', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, [1, 0])('1', '2'), '21')
  })
  it('应该返回11', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, [0, 0])('1', '2'), '11')
  })
  it('应该返回1', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, [0])('1', '2'), '1')
  })
  it('应该返回2', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, 1)('1', '2'), '2')
  })
})
