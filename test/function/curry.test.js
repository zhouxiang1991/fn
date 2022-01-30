/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: curry.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 0:00:09
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:31
 * -----
 */

import assert from 'assert'
import curry from '#packages/function/curry'

describe('curry', () => {
  it('应该返回123', () => {
    const fn = (a, b, c) => a + b + c
    const curriedFn = curry(fn, 3, '1', '2')

    assert.strictEqual(curriedFn('3'), '123')
  })
  it('应该返回321', () => {
    const fn = (a, b, c) => a + b + c
    const curriedFn = curry(fn, 3)

    assert.strictEqual(curriedFn('3', '2', '1'), '321')
  })
  it('应该返回432', () => {
    const fn = (a, b, c) => a + b + c

    assert.strictEqual(curry(fn, 3, '4', '3', '2'), '432')
  })
})
