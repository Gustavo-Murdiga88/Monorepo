var p=Object.defineProperty;var n=(t,s)=>p(t,"name",{value:s,configurable:!0});import{M as o,B as l}from"./index.ecac9a55.js";import{j as e}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const x={parameters:{storySource:{source:`import type { Meta, ComponentStory } from '@storybook/react'
import { Box, MultiStepProps, MultiSteps } from '@ignite-ui/react'

export default {
  title: 'Form/Multi step ',
  component: MultiSteps,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          <Story />
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

const Template: ComponentStory<typeof MultiSteps> = (args) => (
  <MultiSteps {...args} />
)

export const oneSteps = Template.bind({})
oneSteps.args = {
  size: 4,
  currentStep: 1,
}

export const fullSteps = Template.bind({})
fullSteps.args = {
  size: 4,
  currentStep: 4,
}
`,locationsMap:{"one-steps":{startLoc:{col:52,line:29},endLoc:{col:1,line:31},startBody:{col:52,line:29},endBody:{col:1,line:31}},"full-steps":{startLoc:{col:52,line:29},endLoc:{col:1,line:31},startBody:{col:52,line:29},endBody:{col:1,line:31}}}}},title:"Form/Multi step ",component:o,args:{size:4,currentStep:1},decorators:[t=>e(l,{css:{display:"flex",flexDirection:"row",alignItems:"center",gap:"$2"},children:e(t,{})})]},r=n(t=>e(o,{...t}),"Template"),i=r.bind({});i.args={size:4,currentStep:1};const c=r.bind({});c.args={size:4,currentStep:4};const y=["oneSteps","fullSteps"];export{y as __namedExportsOrder,x as default,c as fullSteps,i as oneSteps};
//# sourceMappingURL=multSteps.stories.7929013c.js.map
