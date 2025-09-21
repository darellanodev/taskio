import { Achievement } from './Achievement'
import { Project } from './Project'

export class User {
  id: string
  name: string
  projects: Project[]
  achievements: Achievement[]

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
    this.projects = []
    this.achievements = []
  }

  addProject(project: Project) {
    this.projects.push(project)
  }

  unlockAchievement(achievement: Achievement) {
    achievement.markUnlocked()
    this.achievements.push(achievement)
  }
}
