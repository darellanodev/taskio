import { it, expect, describe } from 'vitest'
import { User } from '../../src/domain/User'
import { Project } from '../../src/domain/Project'
import { Achievement } from '../../src/domain/Achievement'

describe('User', () => {
  it('Should create a new User with id and name', () => {
    const user = new User('user-id-1', 'Alice')
    expect(user.id).toBe('user-id-1')
    expect(user.name).toBe('Alice')
  })
  it('should add a Project to the User projects', () => {
    const user = new User('user-id-1', 'Alice')
    const project = new Project('project-1', 'My first project', [])

    user.addProject(project)

    expect(user.projects).toContain(project)
    expect(user.projects.length).toBe(1)
  })
})

describe('User achievements', () => {
  it('should allow unlocking a new achievement', () => {
    const user = new User('u1', 'Alice')
    const achievement = new Achievement(
      'a1',
      'First project',
      'Create the first project',
    )

    user.unlockAchievement(achievement)

    expect(user.achievements).toHaveLength(1)
    expect(user.achievements[0].id).toBe('a1')
    expect(user.achievements[0].unlockedAt).toBeInstanceOf(Date)
  })
})
