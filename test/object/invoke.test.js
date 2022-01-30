/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: invoke.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:33:50
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:01
 * -----
 */

import assert from 'assert'
import invoke from '#packages/object/invoke'

describe('invoke', () => {
  it('应该返回2', () => {
    assert.strictEqual(invoke({ a: a => a + 1 }, 'a', 1), 2)
  })
})
