export type TUser = {
  type: string
  site_admin: boolean
}

export type ApiIssue = {
  url: string
  number: number
  title: string
  created_at: string
  user: TUser
  comments: number
  closed_at: string | null
  assignees: unknown[]
  state: string
}

export type ApiIssues = ApiIssue[]
