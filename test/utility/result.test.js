/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: result.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-25 23:50:02
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:49
 * -----
 */

import assert from 'assert'
import result from '#packages/utility/result'

describe('result', () => {
  it('yes', () => {
    assert.strictEqual(result(1), 1)
    assert.strictEqual(result(() => 2), 2)
  })
})
