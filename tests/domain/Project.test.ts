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
  it('should return a progress number between 0 and 1', () => {
    const project = new Project('idProject1', 'Project 1 title')
    const task1 = new Task('idTask1', 'Task 1 title', 'completed', new Date())
    const task2 = new Task('idTask2', 'Task 2 title', 'pending', new Date())
    const task3 = new Task('idTask3', 'Task 3 title', 'completed', new Date())
    project.addTask(task1)
    project.addTask(task2)
    project.addTask(task3)
    const progress = project.calculateProgress()
    expect(progress).toBeCloseTo(2 / 3)
  })
})
