
export function pathToName(path: string): string[] {
  return path.replace("/", " > ").split(/( > )/)
}
