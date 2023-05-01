const relativeTimeFormatter = new Intl.RelativeTimeFormat("en", {
  style: "short",
  numeric: "auto",
})

export function getRelativeTime(isoStringDate: string): string {
  const date = new Date(isoStringDate)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) {
    return relativeTimeFormatter.format(-diffInSeconds, "second")
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    return relativeTimeFormatter.format(-diffInMinutes, "minute")
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600)
    return relativeTimeFormatter.format(-diffInHours, "hour")
  } else {
    const diffInDays = Math.floor(diffInSeconds / 86400)
    return relativeTimeFormatter.format(-diffInDays, "day")
  }
}
