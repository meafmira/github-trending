import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Link } from "./Link"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Ui/Link",
  component: Link,
} as ComponentMeta<typeof Link>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (props) => <Link {...props} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "actualbudget / actual-server",
  href: "https://example.com",
}
