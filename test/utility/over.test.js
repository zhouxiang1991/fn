/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: over.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:31:16
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:08:38
 * -----
 */

import assert from 'assert'
import over from '#packages/utility/over'

describe('over', () => {
  it('应该返回[true, \'1\']', () => {
    assert.deepStrictEqual(over([Boolean, String])(1), [true, '1'])
  })
})
