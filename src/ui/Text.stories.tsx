import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Text } from "./Text"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Ui/Text",
  component: Text,
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (props) => <Text {...props} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "A local-first personal finance system",
}
