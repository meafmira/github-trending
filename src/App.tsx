import "./App.css"
import { TrendingRepositories } from "./features/trending-repositories/TrendingRepositories"
import { BoxHeader } from "./ui/BoxHeader"
import { TabGroup } from "./ui/TabGroup"

function App() {
  return (
    <div className="bg-slate-900 w-screen min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <BoxHeader>
          <TabGroup
            tabs={[{ label: "Repositories", value: "repositories" }]}
            activeTab="repositories"
          />
        </BoxHeader>
        <TrendingRepositories />
      </div>
    </div>
  )
}

export default App
