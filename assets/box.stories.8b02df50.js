var a=Object.defineProperty;var r=(o,t)=>a(o,"name",{value:t,configurable:!0});import{B as n}from"./index.ecac9a55.js";import{j as e}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const y={parameters:{storySource:{source:`import type { Meta, ComponentStory } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <span>Isso fica aqui dentro mesmo mano</span>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<BoxProps>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const primary = Template.bind({})
primary.args = {}
`,locationsMap:{primary:{startLoc:{col:45,line:17},endLoc:{col:72,line:17},startBody:{col:45,line:17},endBody:{col:72,line:17}}}}},title:"Surfaces/Box",component:n,args:{children:e("span",{children:"Isso fica aqui dentro mesmo mano"})},argTypes:{children:{control:!1}}},s=r(o=>e(n,{...o}),"Template"),i=s.bind({});i.args={};const f=["primary"];export{f as __namedExportsOrder,y as default,i as primary};
//# sourceMappingURL=box.stories.8b02df50.js.map
