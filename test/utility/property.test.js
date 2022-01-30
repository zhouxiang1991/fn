/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: property.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 11:43:02
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:41
 * -----
 */

import assert from 'assert'
import property from '#packages/utility/property'

describe('property', () => {
  it('应该返回1', () => {
    const result = property('a')({ a: 1 })

    assert.strictEqual(result, 1)
  })
  it('应该返回2', () => {
    const result = property('a[0]')({ a: [2] })

    assert.strictEqual(result, 2)
  })
  it('应该返回3', () => {
    const result = property(['a', '0', 'a'])({ a: [{ a: 3 }] })

    assert.strictEqual(result, 3)
  })
  it('应该返回4', () => {
    const result = property('a[0].a.b')({ a: [{ a: { b: 4 } }] })

    assert.strictEqual(result, 4)
  })
  it('应该返回5', () => {
    const result = property('a.0.a.b')({ a: [{ a: { b: 5 } }] })

    assert.strictEqual(result, 5)
  })
})
