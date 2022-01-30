/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: defaultOr.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 0:08:11
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:14
 * -----
 */

import assert from 'assert'
import defaultOr from '#packages/utility/defaultOr'

describe('defaultOr', () => {
  it('yes', () => {
    assert.strictEqual(defaultOr(1), 1)
    assert.strictEqual(defaultOr(null, 2), 2)
    assert.strictEqual(defaultOr(null, () => 3), 3)
    assert.strictEqual(defaultOr(undefined, 4), 4)
    assert.strictEqual(defaultOr(2, 5, { emptyValues: [2] }), 5)
    assert.strictEqual(defaultOr(1, 6, { predicate: value => value === 1 }), 6)
  })
})
