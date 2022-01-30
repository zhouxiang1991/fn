/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: times.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 9:59:48
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:55
 * -----
 */

import assert from 'assert'
import times from '#packages/function/times'

describe('times', () => {
  it('应该返回[0,1]', () => {
    assert.deepStrictEqual(times(2, i => i), [0, 1])
  })
})
