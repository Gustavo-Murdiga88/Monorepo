var e=Object.defineProperty;var a=(t,n)=>e(t,"name",{value:n,configurable:!0});import{A as o}from"./index.ecac9a55.js";import{j as s}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const A={parameters:{storySource:{source:`import type { Meta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"avatar-with-picture":{startLoc:{col:48,line:9},endLoc:{col:78,line:9},startBody:{col:48,line:9},endBody:{col:78,line:9}},"avatar-no-photo":{startLoc:{col:48,line:9},endLoc:{col:78,line:9},startBody:{col:48,line:9},endBody:{col:78,line:9}}}}},title:"Data display/Avatar",component:o},r=a(t=>s(o,{...t}),"Template"),i=r.bind({});i.args={src:"https://github.com/Gustavo-Murdiga88.png",alt:"Gustavo Murdiga"};const c=r.bind({});c.args={src:"",alt:""};const g=["AvatarWithPicture","AvatarNoPhoto"];export{c as AvatarNoPhoto,i as AvatarWithPicture,g as __namedExportsOrder,A as default};
//# sourceMappingURL=avatar.stories.d386461b.js.map
