/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: bind.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 14:33:19
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:27
 * -----
 */

import assert from 'assert'
import bind from '#packages/function/bind'
import { _ } from '#packages/function/curry'

describe('bind', () => {
  it('应该返回1333555', () => {
    const object = { a: 1 }
    const fn = function name (a, b) {
      return `${this.a}${a}${b}`
    }
    const binded = bind(fn, object, '333')

    assert.strictEqual(binded(555), '1333555')
  })
  it('应该返回1555333', () => {
    const object = { a: 1 }
    const fn = function name (a, b) {
      return `${this.a}${a}${b}`
    }
    const binded = bind(fn, object, _, '333')

    assert.strictEqual(binded(555), '1555333')
  })
})
