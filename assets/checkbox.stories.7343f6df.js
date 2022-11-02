var s=Object.defineProperty;var t=(o,r)=>s(o,"name",{value:r,configurable:!0});import{C as n,B as c,T as a}from"./index.ecac9a55.js";import{a as i,j as e}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const B={parameters:{storySource:{source:`import type { Meta, ComponentStory } from '@storybook/react'
import { Box, CheckBox, CheckBoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Check box',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          <Story />
          <Text fontSize="sm" css={{ fontWeight: '$bold' }}>
            Accept terms of use
          </Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

export const primary = Template.bind({})
primary.args = {}
`,locationsMap:{primary:{startLoc:{col:50,line:29},endLoc:{col:1,line:31},startBody:{col:50,line:29},endBody:{col:1,line:31}}}}},title:"Form/Check box",component:n,decorators:[o=>i(c,{as:"label",css:{display:"flex",flexDirection:"row",alignItems:"center",gap:"$2"},children:[e(o,{}),e(a,{fontSize:"sm",css:{fontWeight:"$bold"},children:"Accept terms of use"})]})]},p=t(o=>e(n,{...o}),"Template"),m=p.bind({});m.args={};const C=["primary"];export{C as __namedExportsOrder,B as default,m as primary};
//# sourceMappingURL=checkbox.stories.7343f6df.js.map
