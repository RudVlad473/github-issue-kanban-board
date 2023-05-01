import { TRepoInfo } from ".."

export function getDetailsPath({ name, repo }: TRepoInfo): string {
  return name + "/" + repo
}
