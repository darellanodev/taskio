import { it, expect, describe } from 'vitest'
import { User } from '../../src/domain/User'

describe('User', () => {
  it('Should create a new User with id and name', () => {
    const user = new User('user-id-1', 'Alice')
    expect(user.id).toBe('user-id-1')
    expect(user.name).toBe('Alice')
  })
})
