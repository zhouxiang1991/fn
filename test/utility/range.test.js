/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: range.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 11:20:05
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:46
 * -----
 */

import assert from 'assert'
import range from '#packages/utility/range'

describe('range', () => {
  it('应该返回[0,1]', () => {
    assert.deepStrictEqual(range(2), [0, 1])
  })
  it('应该返回[0,-1]', () => {
    assert.deepStrictEqual(range(-2), [0, -1])
  })
  it('应该返回[0,1,2,3]', () => {
    assert.deepStrictEqual(range(1, 3), [1, 2])
  })
  it('应该返回[1, 3, 5, 7, 9]', () => {
    assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9])
  })
  it('应该返回[1, 1]', () => {
    assert.deepStrictEqual(range(1, 3, 0), [1, 1])
  })
  it('应该返回[]', () => {
    assert.deepStrictEqual(range(0), [])
  })
})
