export class Achievement {
  id: string
  name: string
  description: string
  unlockedAt: Date | null

  constructor(id: string, name: string, description: string) {
    this.id = id
    this.name = name
    this.description = description
    this.unlockedAt = null
  }

  markUnlocked() {
    this.unlockedAt = new Date()
  }
}
