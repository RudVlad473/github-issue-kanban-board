import { TRepoInfo } from ".."

export function getIssuesPath({ name, repo }: TRepoInfo) {
  return `${name}/${repo}/issues`
}
