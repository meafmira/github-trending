import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { BoxHeader } from "./BoxHeader"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Ui/BoxHeader",
  component: BoxHeader,
} as ComponentMeta<typeof BoxHeader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BoxHeader> = (props) => (
  <BoxHeader {...props} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Box Header",
}
