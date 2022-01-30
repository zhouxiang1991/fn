/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: once.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 14:04:09
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:36
 * -----
 */

import assert from 'assert'
import once from '#packages/function/once'
import identity from '#packages/utility/identity'

describe('once', () => {
  it('应该返回1', () => {
    const fn = once(identity)

    assert.strictEqual(fn(1), 1)
  })
  it('应该返回2', () => {
    const fn = once(identity)

    fn(1)
    assert.strictEqual(fn(2), 1)
  })
})
