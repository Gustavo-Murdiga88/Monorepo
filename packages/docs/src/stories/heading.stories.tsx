import type { Meta, ComponentStory } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Por padrão do heading é um `h2`, mas podemos alterar essa tag com o propriedade `as`',
      },
    },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
    },
    as: {
      control: false,
    },
  },
} as Meta<HeadingProps>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const primary = Template.bind({})
primary.args = {}

export const secondary = Template.bind({})
secondary.args = {}
secondary.parameters = {
  docs: {
    description: {
      story:
        'Por padrão do heading é um `h2`, mas podemos alterar essa tag com o propriedade `as`',
    },
  },
}
