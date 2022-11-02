var s=Object.defineProperty;var n=(e,a)=>s(e,"name",{value:a,configurable:!0});import{b as o,B as l,T as i}from"./index.ecac9a55.js";import{a as d,j as t}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const g={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react'
import { TextArea, TextAreaProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text fontSize="sm" css={{ fontWeight: '$bold' }}>
            Email address
          </Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const withPlaceholder = Template.bind({})
withPlaceholder.args = {
  placeholder: 'add something comment...',
}

export const InputDisaled = Template.bind({})
InputDisaled.args = {
  disabled: true,
}
`,locationsMap:{"with-placeholder":{startLoc:{col:50,line:29},endLoc:{col:1,line:31},startBody:{col:50,line:29},endBody:{col:1,line:31}},"input-disaled":{startLoc:{col:50,line:29},endLoc:{col:1,line:31},startBody:{col:50,line:29},endBody:{col:1,line:31}}}}},title:"Form/Text Area",component:o,args:{},decorators:[e=>d(l,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[t(i,{fontSize:"sm",css:{fontWeight:"$bold"},children:"Email address"}),t(e,{})]})]},r=n(e=>t(o,{...e}),"Template"),c=r.bind({});c.args={placeholder:"add something comment..."};const p=r.bind({});p.args={disabled:!0};const y=["withPlaceholder","InputDisaled"];export{p as InputDisaled,y as __namedExportsOrder,g as default,c as withPlaceholder};
//# sourceMappingURL=textArea.stories.9a3c2f73.js.map
