import { useCallback } from "react"
import { Tab } from "./Tab"

export interface TabOption {
  label: string
  value: string
}

export interface TabGroupProps {
  tabs: TabOption[]
  activeTab?: string
  onChange?: (value: string) => void
}

export function TabGroup({ activeTab, tabs, onChange }: TabGroupProps) {
  const handleChange = useCallback(
    (value: string) => {
      if (onChange && value !== activeTab) {
        onChange(value)
      }
    },
    [activeTab, onChange],
  )

  return (
    <nav>
      {tabs.map((tab) => (
        <Tab
          onClick={() => handleChange(tab.value)}
          key={tab.value}
          active={tab.value === activeTab}
        >
          {tab.label}
        </Tab>
      ))}
    </nav>
  )
}
