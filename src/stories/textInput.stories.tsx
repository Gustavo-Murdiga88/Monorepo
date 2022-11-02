import { Meta, ComponentStory } from '@storybook/react'
import { TextInput, TextInputProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text fontSize="sm" css={{ fontWeight: '$bold' }}>
            Email address
          </Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const Input = Template.bind({})
Input.args = {}

export const InputWithPrefix = Template.bind({})
InputWithPrefix.args = {
  prefix: 'cal.com/',
}

export const InputDisaled = Template.bind({})
InputDisaled.args = {
  disabled: true,
}
