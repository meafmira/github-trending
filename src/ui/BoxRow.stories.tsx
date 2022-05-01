import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { BoxRow } from "./BoxRow"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Ui/BoxRow",
  component: BoxRow,
} as ComponentMeta<typeof BoxRow>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BoxRow> = (props) => <BoxRow {...props} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  description: "A local-first personal finance system",
  href: "https://example.com",
}
