import { BoxHeader } from "../../ui/BoxHeader"
import { BoxRow } from "../../ui/BoxRow"
import { TabGroup } from "../../ui/TabGroup"
import { useTrendingRepositories } from "./useTrendingRepositories"

export function TrendingRepositories() {
  const { data } = useTrendingRepositories()

  return (
    data && (
      <>
        {data.map((repo: any) => (
          <BoxRow
            description={repo.description}
            href={repo.url}
            title={`${repo.username} / ${repo.repositoryName}`}
          />
        ))}
      </>
    )
  )
}
