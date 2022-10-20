import { styled } from './styles'
import { ComponentProps } from 'react'
import propTypes from 'prop-types'

export const Button = styled('button', {
  border: 0,
  backgroundColor: '$ignite300',
  height: 30,
  width: 120,
  borderRadius: 5,
  color: 'White',
  fontFamily: '$default',

  variants: {
    size: {
      lg: {
        width: '240px',
        height: '60',
      },
      small: {
        width: '60px',
        height: '15',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

Button.propTypes = {
  size: propTypes.oneOf(['lg', 'small']),
  color: propTypes.string.isRequired,
}

export type ButtonProps = ComponentProps<typeof Button>
