var i=Object.defineProperty;var o=(t,s)=>i(t,"name",{value:s,configurable:!0});import{c as r,B as a,T as l}from"./index.ecac9a55.js";import{a as p,j as n}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const y={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react'
import { TextInput, TextInputProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text fontSize="sm" css={{ fontWeight: '$bold' }}>
            Email address
          </Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const Input = Template.bind({})
Input.args = {}

export const InputWithPrefix = Template.bind({})
InputWithPrefix.args = {
  prefix: 'cal.com/',
}

export const InputDisaled = Template.bind({})
InputDisaled.args = {
  disabled: true,
}
`,locationsMap:{input:{startLoc:{col:51,line:25},endLoc:{col:1,line:27},startBody:{col:51,line:25},endBody:{col:1,line:27}},"input-with-prefix":{startLoc:{col:51,line:25},endLoc:{col:1,line:27},startBody:{col:51,line:25},endBody:{col:1,line:27}},"input-disaled":{startLoc:{col:51,line:25},endLoc:{col:1,line:27},startBody:{col:51,line:25},endBody:{col:1,line:27}}}}},title:"Form/Text Input",component:r,args:{},decorators:[t=>p(a,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[n(l,{fontSize:"sm",css:{fontWeight:"$bold"},children:"Email address"}),n(t,{})]})]},e=o(t=>n(r,{...t}),"Template"),c=e.bind({});c.args={};const d=e.bind({});d.args={prefix:"cal.com/"};const x=e.bind({});x.args={disabled:!0};const b=["Input","InputWithPrefix","InputDisaled"];export{c as Input,x as InputDisaled,d as InputWithPrefix,b as __namedExportsOrder,y as default};
//# sourceMappingURL=textInput.stories.f0ed19b0.js.map
