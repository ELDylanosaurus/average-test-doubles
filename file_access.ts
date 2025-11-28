import { INumberSource } from "./INumberSource.ts"

export class FileAccess implements INumberSource {
  constructor(private path: string) {}

  public async readNumbers(): Promise<number[]> {
    const numbers: number[] = []
    const content: string = await Deno.readTextFile(this.path)
    const lines: string[] = content.split("\n")
    for (const line of lines) {
      const n = Number.parseInt(line)
      if (!Number.isNaN(n)) {
        numbers.push(n)
      }
    }
    return numbers
  }
}
