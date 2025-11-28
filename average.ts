import { INumberSource } from "./INumberSource.ts"
import { mean, median, mode } from "./statistics.ts"

export class Average {
  constructor(private numberSource: INumberSource) {}

  public async computeMeanOfFile(): Promise<number> {
    const numbers = await this.numberSource.readNumbers()
    return mean(numbers)
  }

  public async computeMedianOfFile(): Promise<number> {
    const numbers = await this.numberSource.readNumbers()
    return median(numbers)
  }

  public async computeModeOfFile(): Promise<number[]> {
    const numbers = await this.numberSource.readNumbers()
    return mode(numbers)
  }
}
