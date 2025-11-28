export interface INumberSource {
  readNumbers(): Promise<number[]>
}

