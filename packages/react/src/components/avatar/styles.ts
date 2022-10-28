import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles/index'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-block',
  borderRadius: '$full',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})
export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})
export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',
  svg: {
    width: '$6',
    height: '$6',
  },
})
