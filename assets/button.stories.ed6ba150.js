var p=Object.defineProperty;var s=(n,a)=>p(n,"name",{value:a,configurable:!0});import{I as y,r as m,a as l}from"./index.ecac9a55.js";import{a as r,F as o,j as e}from"./jsx-runtime.fc8cbe6a.js";import{r as u}from"./index.465ae432.js";import"./index.e0bc8e59.js";import"./iframe.0a10eb1b.js";var t=new Map;t.set("bold",function(n){return r(o,{children:[e("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});t.set("duotone",function(n){return r(o,{children:[e("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});t.set("fill",function(){return e(o,{children:e("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"})})});t.set("light",function(n){return r(o,{children:[e("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});t.set("thin",function(n){return r(o,{children:[e("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});t.set("regular",function(n){return r(o,{children:[e("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var h=s(function(a,c){return m(a,c,t)},"renderPath"),d=u.exports.forwardRef(function(n,a){return e(y,{...Object.assign({ref:a},n,{renderPath:h})})});d.displayName="ArrowRight";const k=d,A={title:"Form/Button",component:l,args:{children:"Send",variant:"primary",disabled:!1},argTypes:{click:{action:"click",table:{disable:!0}},children:{control:!1},variant:{control:"inline-radio",options:["primary","secondary","tertiary"]},size:{control:"select",options:["sm","md"]},disabled:{control:"boolean"}},parameters:{storySource:{source:`import type { Meta, ComponentStory } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    click: {
      action: 'click',
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    actions: {
      handles: ['onClick', 'mouseover'],
    },
  },
} as Meta<ButtonProps>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const primary = Template.bind({})
primary.args = {}

export const secondary = Template.bind({})
secondary.args = {
  variant: 'secondary',
}

export const tertiary = Template.bind({})
tertiary.args = {
  variant: 'tertiary',
  children: 'Cancel',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  size: 'sm',
}

export const withIcon = Template.bind({})
withIcon.args = {
  variant: 'primary',
  children: (
    <>
      {'Send'}
      <ArrowRight weight="bold" />
    </>
  ),
}
`,locationsMap:{primary:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},secondary:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},tertiary:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},small:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},disabled:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},"with-icon":{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}}}},actions:{handles:["onClick","mouseover"]}}},i=s(n=>e(l,{...n}),"Template"),b=i.bind({});b.args={};const f=i.bind({});f.args={variant:"secondary"};const g=i.bind({});g.args={variant:"tertiary",children:"Cancel"};const L=i.bind({});L.args={size:"sm"};const B=i.bind({});B.args={disabled:!0,size:"sm"};const x=i.bind({});x.args={variant:"primary",children:r(o,{children:["Send",e(k,{weight:"bold"})]})};const z=["primary","secondary","tertiary","Small","Disabled","withIcon"];export{B as Disabled,L as Small,z as __namedExportsOrder,A as default,b as primary,f as secondary,g as tertiary,x as withIcon};
//# sourceMappingURL=button.stories.ed6ba150.js.map
