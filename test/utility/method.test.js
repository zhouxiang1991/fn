/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: method.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-26 22:46:42
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:33
 * -----
 */

import assert from 'assert'
import method from '#packages//utility/method'

describe('method', () => {
  it('yes', () => {
    assert.strictEqual(method('a')({ a: () => 1 }), 1)
    assert.strictEqual(method('a.b')({ a: { b: () => 2 } }), 2)
    assert.strictEqual(method(['a', 'b', 'c'])({ a: { b: { c: () => 3 } } }), 3)
    assert.strictEqual(method('a[0]')({ a: [() => 4] }), 4)
    assert.strictEqual(method(['a', '0'])({ a: [() => 5] }), 5)
  })
})
