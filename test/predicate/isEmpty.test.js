/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isEmpty.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 23:45:51
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:07
 * -----
 */

import assert from 'assert'
import isEmpty from '#packages/predicate/isEmpty'

describe('isEmpty', () => {
  it('yes', () => {
    assert.strictEqual(isEmpty({}), true)
    assert.strictEqual(isEmpty([]), true)
    assert.strictEqual(isEmpty([1]), false)
    assert.strictEqual(isEmpty({ a: 1 }), false)
    assert.strictEqual(isEmpty(1), true)
  })
})
