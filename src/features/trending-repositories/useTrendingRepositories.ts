import { useQuery } from "react-query"
import { getTrendingRepositories } from "./getTrendingRepositories"

export function useTrendingRepositories() {
  const trendingRepositories = useQuery(
    "trending-repositories",
    getTrendingRepositories,
  )

  return trendingRepositories
}
