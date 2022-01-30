/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: presetArg.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:45:54
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:47
 * -----
 */

/**
 * @file
 * @author zhouxiang <zhouxiang219@163.com>
 * -----
 * Filename: presetArg.test.js
 * Project: fn
 * Created By: zhouxiang <zhouxiang219@163.com>
 * File Created: 2022-01-28 13:45:54
 * Modified By: zhouxiang <zhouxiang219@163.com>
 * Last Modified: 2022-01-30 11:07:42
 * -----
 */

import assert from 'assert'
import presetArg from '#packages/function/presetArg'
import identity from '#packages/utility/identity'

describe('presetArg', () => {
  it('应该返回1', () => {
    assert.strictEqual(presetArg(1)(identity), 1)
  })
})
