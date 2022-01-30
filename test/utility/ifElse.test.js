/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: ifElse.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:30:30
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:18
 * -----
 */

import assert from 'assert'
import ifElse from '#packages/utility/ifElse'
import isNumber from '#packages/predicate/isNumber'
import isString from '#packages/predicate/isString'

describe('ifElse', () => {
  it('应该返回1', () => {
    assert.strictEqual(ifElse(isNumber(1), 1, 2), 1)
  })
  it('应该返回2', () => {
    assert.strictEqual(ifElse(isNumber('1'), 1, 2), 2)
  })
  it('应该返回3', () => {
    assert.strictEqual(ifElse(isString('1'), v => 3, v => 4), 3)
  })
  it('应该返回4', () => {
    assert.strictEqual(ifElse(isString(1), v => 3, v => 4), 4)
  })
})
