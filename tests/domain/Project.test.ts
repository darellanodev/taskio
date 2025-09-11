import { it, expect, describe } from 'vitest'
import { Project } from '../../src/domain/Project'
import { Task } from '../../src/domain/Task'

describe('Project', () => {
  it('should add a task to a project', () => {
    const project = new Project('idProject1', 'Project 1 title')
    const task = new Task('idTask1', 'Task 1 title', 'pending', new Date())

    project.addTask(task)

    expect(project.tasks).toContain(task)
  })
  it('should return 0 progress if no task is completed', () => {
    const project = new Project('idProject1', 'Project 1 title')
    const task1 = new Task('idTask1', 'Task 1 title', 'pending', new Date())
    const task2 = new Task('idTask2', 'Task 2 title', 'pending', new Date())
    project.addTask(task1)
    project.addTask(task2)
    const progress = project.calculateProgress()
    expect(progress).toBe(0)
  })
})
