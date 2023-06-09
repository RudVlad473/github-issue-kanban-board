export function toPascalCase(str: string): string {
  return str.replace(/(\w)(\w*)/g, function (_, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase()
  })
}
