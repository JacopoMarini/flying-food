import { ReactNode } from 'react'
import { StyledBaseButton, StyledBaseButtonProps } from './styled'

type Props = {
  children: ReactNode
} & Partial<StyledBaseButtonProps>

export const BaseButton = ({
  children,
  className,
  size = 'md',
  radius = 4,
  bgColor = 'primary',
  outlined
}: Props) => {
  return (
    <StyledBaseButton
      radius={radius}
      size={size}
      bgColor={bgColor}
      className={className}
      outlined={outlined}
    >
      {children}
    </StyledBaseButton>
  )
}
