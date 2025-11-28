import { INumberSource } from "./INumberSource.ts"

export class FakeNumberSource implements INumberSource {
  private files = new Map<string, number[]>()

  constructor(private path: string) {}

  addFile(path: string, numbers: number[]): void {
    this.files.set(path, numbers)
  }

  async readNumbers(): Promise<number[]> {
    const numbers = this.files.get(this.path)
    if (!numbers) {
      return []
    }
    return numbers
  }
}
