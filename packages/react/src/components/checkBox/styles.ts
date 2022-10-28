import { styled, keyframes } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled(Checkbox.Root, {
  height: '$6',
  width: '$6',
  borderRadius: '$xs',
  lineHeight: 0,
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid transparent',
  backgroundColor: '$gray900',
  padding: 0,

  '&:focus': {
    borderColor: '$ignite500',
  },

  "&[data-state='checked']": {
    backgroundColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckBoxIndicator = styled(Checkbox.CheckboxIndicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state=checked]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state=unchecked]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
