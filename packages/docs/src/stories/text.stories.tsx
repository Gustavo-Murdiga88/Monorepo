import type { Meta, ComponentStory } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
    as: 'strong',
  },
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
} as Meta<TextProps>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const primary = Template.bind({})
primary.args = {}
