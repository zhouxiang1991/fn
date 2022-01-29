import assert from 'assert'
import cloneDeep from '#packages/utility/cloneDeep'

describe('cloneDeep', () => {
  it('yes', () => {
    const value1 = { a: 1 }

    assert.notStrictEqual(cloneDeep(value1), value1)
    assert.deepStrictEqual(cloneDeep(value1), value1)

    const value2 = [1, { a: 1 }]

    assert.notStrictEqual(cloneDeep(value2), value2)
    assert.deepStrictEqual(cloneDeep(value2), value2)
  })
})
