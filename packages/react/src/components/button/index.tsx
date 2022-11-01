import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$md',
  padding: '0 $4',
  minWidth: 120,
  boxSizing: 'border-box',

  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '$2',
  cursor: 'pointer',

  svg: {
    height: '$4',
    width: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:hover:not(:disabled)': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '1px solid $ignite500',

        '&:hover:not(:disabled)': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:hover:not(:disabled)': {
          color: '$gray200',
        },

        '&:disabled': {
          color: '$gray200',
        },
      },
    },
    size: {
      sm: {
        height: 36,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
export interface ButtonProps extends ComponentProps<typeof Button> {}
Button.displayName = 'Button'
