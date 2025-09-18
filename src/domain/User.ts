import { Project } from './Project'

export class User {
  id: string
  name: string
  projects: Project[]

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
    this.projects = []
  }

  addProject(project: Project) {
    this.projects.push(project)
  }
}
