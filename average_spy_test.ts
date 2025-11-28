import { expect } from "@std/expect"
import { Average } from "./average.ts"
import { FileAccess } from "./file_access.ts"
import { FileAccessSpy } from "./file_access_spy.ts"

Deno.test("Average mit FileAccessSpy ruft readNumbers genau einmal auf und protokolliert Werte", async () => {
  const tempPath = await Deno.makeTempFile()

  await Deno.writeTextFile(tempPath, "1\n2\n3\n4\n5\n")

  const realFileAccess = new FileAccess(tempPath)
  const spy = new FileAccessSpy(realFileAccess)
  const average = new Average(spy)

  const result = await average.computeMeanOfFile()

  expect(result).toBe(3)
  expect(spy.callCount).toBe(1)
  expect(spy.returnedValues.length).toBe(1)
  expect(spy.returnedValues[0]).toEqual([1, 2, 3, 4, 5])

  await Deno.remove(tempPath)
})
