import { styled } from '../../styles'
import { Text } from '../text'

export const MultiStepsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})
export const Label = styled(Text, {
  color: '$gray100',
  fontWeight: 'bold',

  defaultVariants: {
    fontSize: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  height: '$1',
  width: '100%',
  gridTemplateColumns: 'repeat(var(--size-steps), 1fr)',
})

export const Step = styled('div', {
  height: '$1',
  width: '100%',
  backgroundColor: '$gray600',
  borderRadius: '$full',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
