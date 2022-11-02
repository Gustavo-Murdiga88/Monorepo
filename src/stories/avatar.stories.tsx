import type { Meta, ComponentStory } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const AvatarWithPicture = Template.bind({})
AvatarWithPicture.args = {
  src: 'https://github.com/Gustavo-Murdiga88.png',
  alt: 'Gustavo Murdiga',
}

export const AvatarNoPhoto = Template.bind({})
AvatarNoPhoto.args = {
  src: '',
  alt: '',
}
