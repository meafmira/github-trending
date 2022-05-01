import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { TabGroup, TabGroupProps } from "./TabGroup"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Ui/TabGroup",
  component: TabGroup,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof TabGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabGroup> = (props: TabGroupProps) => (
  <TabGroup {...props} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs: [
    { label: "Repositories", value: "repositories" },
    { label: "Issues", value: "issues" },
  ],
  activeTab: "repositories",
}
