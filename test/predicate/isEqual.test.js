/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: isEqual.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-27 0:12:24
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:09
 * -----
 */

import assert from 'assert'
import isEqual from '#packages/predicate/isEqual'

describe('isEqual', () => {
  it('yes', () => {
    assert.strictEqual(isEqual(1, 1), true)
    assert.strictEqual(isEqual(1, 0), false)
    assert.strictEqual(isEqual({ a: 1 }, { a: 1 }), true)
    assert.strictEqual(isEqual([1], [1]), true)
    assert.strictEqual(isEqual([1], [1, 1]), false)
    assert.strictEqual(isEqual({ a: 1 }, { a: 2 }), false)
    assert.strictEqual(isEqual({ a: 1 }, {}), false)
    assert.strictEqual(isEqual({ a: 1 }, []), false)
    assert.strictEqual(isEqual({}, {}), true)
    assert.strictEqual(isEqual([], []), true)
    assert.strictEqual(isEqual({ a: { b: ['1'] } }, { a: { b: [1] } }, (a, b, key) => {
      return +a === +b
    }), true)
  })
})
