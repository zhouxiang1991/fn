/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: rearg.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 11:01:20
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:53
 * -----
 */

import assert from 'assert'
import rearg from '#packages/function/rearg'

describe('rearg', () => {
  it('应该返回21', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, [1, 0])('1', '2'), '21')
  })
  it('应该返回11', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, [0, 0])('1', '2'), '11')
  })
  it('应该返回1', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, [0])('1', '2'), '1')
  })
  it('应该返回2', () => {
    assert.strictEqual(rearg((a = '', b = '') => a + b, 1)('1', '2'), '2')
  })
})
