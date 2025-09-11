import { Task } from './Task'
export class Project {
  constructor(
    public id: string,
    public title: string,
    public tasks: Task[] = [],
  ) {}
  addTask(task: Task) {
    this.tasks.push(task)
  }
  calculateProgress() {
    const total = this.tasks.length
    if (total === 0) return 0
    const completed = this.tasks.filter(
      (task) => task.status === 'completed',
    ).length
    return completed / total
  }
}
