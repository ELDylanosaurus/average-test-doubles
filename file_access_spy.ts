import { INumberSource } from "./INumberSource.ts"
import { FileAccess } from "./file_access.ts"

export class FileAccessSpy implements INumberSource {
  public callCount = 0
  public returnedValues: number[][] = []

  constructor(private realFileAccess: FileAccess) {}

  async readNumbers(): Promise<number[]> {
    this.callCount += 1
    const numbers = await this.realFileAccess.readNumbers()
    this.returnedValues.push(numbers)
    return numbers
  }
}
