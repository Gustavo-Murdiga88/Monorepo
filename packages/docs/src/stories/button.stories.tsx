import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'enviar',
  },
} as Meta<ButtonProps>

export const primary: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}

export const secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
