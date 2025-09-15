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
})
