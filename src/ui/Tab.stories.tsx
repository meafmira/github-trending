import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Tab } from "./Tab"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Ui/Tab",
  component: Tab,
} as ComponentMeta<typeof Tab>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (props) => <Tab {...props} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

export const Active = Template.bind({})
Active.args = {
  active: true,
}
