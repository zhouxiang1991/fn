/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: ary.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 14:26:23
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:21
 * -----
 */

import assert from 'assert'
import ary from '#packages/function/ary'

describe('ary', () => {
  it('应该返回3', () => {
    const fn = ary((a, b = 1) => a + b, 2)

    assert.strictEqual(fn(1, 2), 3)
  })
  it('应该返回4', () => {
    const fn = ary((a, b = 1) => a + b)(2)

    assert.strictEqual(fn(2, 2), 4)
  })
})
