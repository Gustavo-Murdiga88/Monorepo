var e=Object.defineProperty;var t=(n,r)=>e(n,"name",{value:r,configurable:!0});import{T as o}from"./index.ecac9a55.js";import{j as s}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const T={parameters:{storySource:{source:`import type { Meta, ComponentStory } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
    as: 'strong',
  },
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
} as Meta<TextProps>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const primary = Template.bind({})
primary.args = {}
`,locationsMap:{primary:{startLoc:{col:46,line:33},endLoc:{col:74,line:33},startBody:{col:46,line:33},endBody:{col:74,line:33}}}}},title:"Typography/Text",component:o,args:{children:"Example Text",as:"strong"},argTypes:{fontSize:{control:"inline-radio",options:["xxs","xs","sm","md","lg","xl","2xl","4xl","5xl","6xl","7xl","8xl","9xl"]}}},l=t(n=>s(o,{...n}),"Template"),a=l.bind({});a.args={};const d=["primary"];export{d as __namedExportsOrder,T as default,a as primary};
//# sourceMappingURL=text.stories.442154c4.js.map
