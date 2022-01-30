/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: unary.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 14:06:36
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:58
 * -----
 */

import assert from 'assert'
import unary from '#packages/function/unary'

describe('unary', () => {
  it('应该返回2', () => {
    const fn = unary((a, b = 1) => a + b)

    assert.strictEqual(fn(1, 2), 2)
  })
})
