/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: propertyOf.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 17:16:27
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:43
 * -----
 */

import assert from 'assert'
import propertyOf from '#packages/utility/propertyOf'

describe('propertyOf', () => {
  it('应该返回1', () => {
    const result = propertyOf({ a: 1 })('a')

    assert.strictEqual(result, 1)
  })
  it('应该返回2', () => {
    const result = propertyOf({ a: [2] })('a[0]')

    assert.strictEqual(result, 2)
  })
  it('应该返回3', () => {
    const result = propertyOf({ a: [{ a: 3 }] })(['a', '0', 'a'])

    assert.strictEqual(result, 3)
  })
  it('应该返回4', () => {
    const result = propertyOf({ a: [{ a: { b: 4 } }] })('a[0].a.b')

    assert.strictEqual(result, 4)
  })
  it('应该返回5', () => {
    const result = propertyOf({ a: [{ a: { b: 5 } }] })('a.0.a.b')

    assert.strictEqual(result, 5)
  })
})
