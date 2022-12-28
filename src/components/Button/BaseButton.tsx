import { ReactNode } from 'react'
import { StyledBaseButton, StyledBaseButtonProps } from './styled'

type Props = {
  children: ReactNode
} & Partial<StyledBaseButtonProps>

export const BaseButton = ({
  children,
  className,
  color = 'text',
  size = 'md',
  radius = 4,
  bgColor = 'lightGrey',
  outlined
}: Props) => {
  return (
    <StyledBaseButton
      radius={radius}
      size={size}
      bgColor={bgColor}
      className={className}
      color={color}
    >
      {children}
    </StyledBaseButton>
  )
}
