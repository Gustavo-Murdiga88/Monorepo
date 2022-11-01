import type { Meta, ComponentStory } from '@storybook/react'
import { Box, MultiStepProps, MultiSteps } from '@ignite-ui/react'

export default {
  title: 'Form/Multi step ',
  component: MultiSteps,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          <Story />
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

const Template: ComponentStory<typeof MultiSteps> = (args) => (
  <MultiSteps {...args} />
)

export const oneSteps = Template.bind({})
oneSteps.args = {
  size: 4,
  currentStep: 1,
}

export const fullSteps = Template.bind({})
fullSteps.args = {
  size: 4,
  currentStep: 4,
}
