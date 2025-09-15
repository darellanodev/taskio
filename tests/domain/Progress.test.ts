import { it, expect, describe } from 'vitest'
import { Progress } from '../../src/domain/Progress'

describe('Progress', () => {
  it('should create a Progress with a value between 0 and 1', () => {
    const progress = new Progress(0.5)
    expect(progress.value).toBe(0.5)
  })
  it('should throw if value is less than 0 or greater than 1', () => {
    expect(() => new Progress(1.1)).toThrow()
    expect(() => new Progress(-1)).toThrow()
  })
  it('should consider two Progress with the same value as equal', () => {
    const p1 = new Progress(0.4)
    const p2 = new Progress(0.4)
    expect(p1.equals(p2)).toBe(true)
  })
  it('should allow Progress values exactly 0 and 1', () => {
    const zeroProgress = new Progress(0)
    const fullProgress = new Progress(1)

    expect(zeroProgress.value).toBe(0)
    expect(fullProgress.value).toBe(1)
  })
})
