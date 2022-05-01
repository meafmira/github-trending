import React, { useCallback } from "react"
import { Tab } from "./Tab"

export interface TabOption {
  label: string
  value: string
  as?: React.ElementType
}

export interface TabGroupProps {
  tabs: TabOption[]
  activeTab?: string
  onChange?: (value: string) => void
  renderTab?: (tab: React.ReactElement, tabOption: TabOption) => React.ReactNode
}

export function TabGroup({
  activeTab,
  tabs,
  onChange,
  renderTab = (tab) => tab,
}: TabGroupProps) {
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
      {tabs.map((tab) =>
        renderTab(
          <Tab
            onClick={() => handleChange(tab.value)}
            key={tab.value}
            active={tab.value === activeTab}
            as={tab.as}
          >
            {tab.label}
          </Tab>,
          tab,
        ),
      )}
    </nav>
  )
}
