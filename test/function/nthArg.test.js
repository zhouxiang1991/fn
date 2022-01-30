/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: nthArg.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 11:01:37
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:34
 * -----
 */

import assert from 'assert'
import nthArg from '#packages/utility/nthArg'

describe('nthArg', () => {
  it('应该返回1', () => {
    assert.strictEqual(nthArg(0)(1), 1)
  })
  it('应该返回2', () => {
    assert.strictEqual(nthArg(1)(1, 2), 2)
  })
  it('应该返回3', () => {
    assert.strictEqual(nthArg(-1)(1, 2, 3), 3)
  })
  it('应该返回4', () => {
    assert.strictEqual(nthArg(-2)(1, 4, 3), 4)
  })
})
