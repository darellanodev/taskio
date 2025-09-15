export class Progress {
  readonly value: number
  constructor(value: number) {
    if (value < 0 || value > 1) {
      throw new Error('Value must be between 0 and 1')
    }
    this.value = value
  }
  equals(otherProgress: Progress): boolean {
    return this.value === otherProgress.value
  }
}
