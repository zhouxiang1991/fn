/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: presetFn.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:47:55
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:50
 * -----
 */

import assert from 'assert'
import presetFn from '#packages/function/presetFn'
import identity from '#packages/utility/identity'

describe('presetFn', () => {
  it('应该返回1', () => {
    assert.strictEqual(presetFn(identity)(1), 1)
  })
})
