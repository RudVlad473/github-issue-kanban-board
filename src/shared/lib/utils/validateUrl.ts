const githubRepoUrlRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([\w-]+)\/([\w-]+)(?:\/)?$/

export function validateUrl(url: string): boolean {
  let isValidUrl = false

  try {
    if (!url || !githubRepoUrlRegex.test(url)) {
      throw new Error()
    }

    new URL(url)
    isValidUrl = true
  } catch (e) {
    isValidUrl = false
  }

  return isValidUrl
}
