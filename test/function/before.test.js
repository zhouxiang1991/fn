/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: before.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:59:46
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:24
 * -----
 */

import assert from 'assert'
import before from '#packages/function/before'
import identity from '#packages/utility/identity'

describe('before', () => {
  it('应该返回1', () => {
    const fn = before(2, identity)

    assert.strictEqual(fn(1), 1)
  })
  it('应该返回2', () => {
    const fn = before(2, identity)

    fn(1)
    assert.strictEqual(fn(2), 1)
  })
  it('应该返回3', () => {
    const fn = before(3, identity)

    fn(2)
    fn(3)
    assert.strictEqual(fn(1), 3)
  })
})
