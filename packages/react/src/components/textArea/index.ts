import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const TextArea = styled('textarea', {
  background: '$gray900',
  borderRadius: '$md',
  border: '2px solid transparent',

  color: '$gray100',

  fontWeight: '$regular',
  fontFamily: '$default',
  fontSize: '$sm',

  minHeight: 80,

  padding: '$3 $4',

  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite500',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
