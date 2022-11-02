var t=Object.defineProperty;var n=(o,s)=>t(o,"name",{value:s,configurable:!0});import{H as e}from"./index.ecac9a55.js";import{j as d}from"./jsx-runtime.fc8cbe6a.js";import"./index.465ae432.js";import"./iframe.0a10eb1b.js";import"./index.e0bc8e59.js";const x={title:"Typography/Heading",component:e,args:{children:"H1 Heading",as:"h1",size:"md"},parameters:{storySource:{source:`import type { Meta, ComponentStory } from '@storybook/react'
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
          'Por padr\xE3o do heading \xE9 um \`h2\`, mas podemos alterar essa tag com o propriedade \`as\`',
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
        'Por padr\xE3o do heading \xE9 um \`h2\`, mas podemos alterar essa tag com o propriedade \`as\`',
    },
  },
}
`,locationsMap:{primary:{startLoc:{col:49,line:31},endLoc:{col:80,line:31},startBody:{col:49,line:31},endBody:{col:80,line:31}},secondary:{startLoc:{col:49,line:31},endLoc:{col:80,line:31},startBody:{col:49,line:31},endBody:{col:80,line:31}}}},docs:{description:{component:"Por padr\xE3o do heading \xE9 um `h2`, mas podemos alterar essa tag com o propriedade `as`"}}},argTypes:{size:{control:"inline-radio",options:["sm","md","lg","2xl","3xl","4xl","5xl","6xl"]},as:{control:!1}}},a=n(o=>d(e,{...o}),"Template"),i=a.bind({});i.args={};const r=a.bind({});r.args={};r.parameters={docs:{description:{story:"Por padr\xE3o do heading \xE9 um `h2`, mas podemos alterar essa tag com o propriedade `as`"}}};const h=["primary","secondary"];export{h as __namedExportsOrder,x as default,i as primary,r as secondary};
//# sourceMappingURL=heading.stories.a0450bff.js.map
