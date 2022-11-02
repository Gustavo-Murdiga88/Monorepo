import { Meta, ComponentStory } from '@storybook/react'
import { TextArea, TextAreaProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text fontSize="sm" css={{ fontWeight: '$bold' }}>
            Email address
          </Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const withPlaceholder = Template.bind({})
withPlaceholder.args = {
  placeholder: 'add something comment...',
}

export const InputDisaled = Template.bind({})
InputDisaled.args = {
  disabled: true,
}
