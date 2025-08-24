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
}
