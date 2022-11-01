import type { Meta, ComponentStory } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    click: {
      action: 'click',
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    actions: {
      handles: ['onClick', 'mouseover'],
    },
  },
} as Meta<ButtonProps>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const primary = Template.bind({})
primary.args = {}

export const secondary = Template.bind({})
secondary.args = {
  variant: 'secondary',
}

export const tertiary = Template.bind({})
tertiary.args = {
  variant: 'tertiary',
  children: 'Cancel',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  size: 'sm',
}

export const withIcon = Template.bind({})
withIcon.args = {
  variant: 'primary',
  children: (
    <>
      {'Send'}
      <ArrowRight weight="bold" />
    </>
  ),
}
