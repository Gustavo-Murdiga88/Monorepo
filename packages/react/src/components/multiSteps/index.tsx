import { MultiStepsContainer, Label, Steps, Step } from './styles'
export interface MultiStepProps {
  currentStep?: number
  size: number
}
export function MultiSteps({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepsContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--size-steps': size }}>
        {Array(size)
          .fill(0)
          .map((_, i) => (
            <Step key={i} active={i + 1 <= currentStep} />
          ))}
      </Steps>
    </MultiStepsContainer>
  )
}

MultiSteps.displayName = 'MultiSteps'
