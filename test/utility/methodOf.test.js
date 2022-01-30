/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: methodOf.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 23:04:49
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:35
 * -----
 */

import assert from 'assert'
import methodOf from '#packages//utility/methodOf'

describe('methodOf', () => {
  it('yes', () => {
    assert.strictEqual(methodOf({ a: () => 1 })('a'), 1)
    assert.strictEqual(methodOf({ a: { b: () => 2 } })('a.b'), 2)
    assert.strictEqual(methodOf({ a: { b: { c: () => 3 } } })(['a', 'b', 'c']), 3)
    assert.strictEqual(methodOf({ a: [() => 4] })('a[0]'), 4)
    assert.strictEqual(methodOf({ a: [() => 5] })(['a', '0']), 5)
  })
})
