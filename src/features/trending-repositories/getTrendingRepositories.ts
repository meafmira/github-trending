export async function getTrendingRepositories() {
  const response = await fetch(
    "https://gh-trending-api.herokuapp.com/repositories",
  )
  const result = await response.json()

  return result
}
