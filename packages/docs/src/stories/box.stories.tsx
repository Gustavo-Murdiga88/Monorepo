import type { Meta, ComponentStory } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <span>Isso fica aqui dentro mesmo mano</span>,
  },
} as Meta<BoxProps>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const primary = Template.bind({})
primary.args = {}
