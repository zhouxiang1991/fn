/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: cloneDeep.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 11:17:35
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:12
 * -----
 */

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
