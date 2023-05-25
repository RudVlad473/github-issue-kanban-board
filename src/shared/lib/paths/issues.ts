import { TRepoInfo } from "../types"

export function getIssuesPath({ name, repo }: TRepoInfo) {
  return `${name}/${repo}/issues`
}
