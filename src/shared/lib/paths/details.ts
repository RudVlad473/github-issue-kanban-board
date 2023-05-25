import { TRepoInfo } from "../types"

export function getDetailsPath({ name, repo }: TRepoInfo): string {
  return name + "/" + repo
}
