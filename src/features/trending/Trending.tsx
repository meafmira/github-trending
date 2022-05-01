import { Link, Route, Routes } from "react-router-dom"
import { BoxHeader } from "../../ui/BoxHeader"
import { TabGroup } from "../../ui/TabGroup"
import { TrendingRepositories } from "../trending-repositories/TrendingRepositories"

export function Trending() {
  return (
    <div className="max-w-4xl mx-auto">
      <BoxHeader>
        <TabGroup
          tabs={[
            { label: "Repositories", value: "repositories" },
            { label: "Developers", value: "developers" },
          ]}
          activeTab="repositories"
          renderTab={(tab, { label, value }) => <Link to={value}>{tab}</Link>}
        />
      </BoxHeader>
      <Routes>
        <Route index element={<TrendingRepositories />} />
        <Route path="/repositories" element={<TrendingRepositories />} />
      </Routes>
    </div>
  )
}
