import { useEffect } from "react"
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { BoxHeader } from "../../ui/BoxHeader"
import { TabGroup } from "../../ui/TabGroup"
import { TrendingRepositories } from "../trending-repositories/TrendingRepositories"

function Redirect({ to }: { to: string }) {
  let navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  })
  return null
}

export function Trending() {
  const location = useLocation()

  return (
    <div className="max-w-4xl mx-auto">
      <BoxHeader>
        <TabGroup
          tabs={[
            {
              label: "Repositories",
              value: "/repositories",
              as: (props) => <Link to="repositories" {...props} />,
            },
            {
              label: "Developers",
              value: "/developers",
              as: (props) => <Link to="developers" {...props} />,
            },
          ]}
          activeTab={location.pathname}
        />
      </BoxHeader>
      <Routes>
        <Route index element={<Redirect to="/repositories" />} />
        <Route path="/repositories" element={<TrendingRepositories />} />
      </Routes>
    </div>
  )
}
