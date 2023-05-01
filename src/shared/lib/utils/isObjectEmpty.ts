export function isObjectEmpty(obj: Record<string, any> | undefined): boolean {
  return obj ? Object.keys(obj).length === 0 : true
}
