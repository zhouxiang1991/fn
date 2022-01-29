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
