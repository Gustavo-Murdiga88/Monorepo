import { CheckBoxContainer, CheckBoxIndicator } from './styles'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxProps } from '@radix-ui/react-checkbox'

export function CheckBox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {}
CheckBox.displayName = 'CheckBox'
