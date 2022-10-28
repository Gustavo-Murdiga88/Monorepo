import type { Meta, ComponentStory } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
    as: 'strong',
  },
} as Meta<TextProps>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const primary = Template.bind({})
primary.args = {}
