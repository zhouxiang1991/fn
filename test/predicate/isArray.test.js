/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isArray.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 23:52:07
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:04
 * -----
 */

import assert from 'assert'
import isArray from '#packages/predicate/isArray'

describe('isArray', () => {
  it('yes', () => {
    assert.strictEqual(isArray([]), true)
    assert.strictEqual(isArray({}), false)
    assert.strictEqual(isArray(1), false)
  })
})
