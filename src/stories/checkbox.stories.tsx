import type { Meta, ComponentStory } from '@storybook/react'
import { Box, CheckBox, CheckBoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Check box',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          <Story />
          <Text fontSize="sm" css={{ fontWeight: '$bold' }}>
            Accept terms of use
          </Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

export const primary = Template.bind({})
primary.args = {}
