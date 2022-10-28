import { styled } from '../../styles'

export const InputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  borderRadius: '$sm',
  border: '2px solid transparent',

  '&:has(input:focus:not(:disabled))': {
    borderColor: '$ignite500',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray100',
  background: 'transparent',
  border: 0,
  fontWeight: '$medium',
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
})
