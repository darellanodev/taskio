import { it, expect, describe } from 'vitest'
import { User } from '../../src/domain/User'
import { Project } from '../../src/domain/Project'

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
