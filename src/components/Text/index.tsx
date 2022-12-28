import { ReactNode } from 'react'
import { StyledText, StyledTextProps } from './styled'

type Props = {
  children: ReactNode
  className?: string
} & Partial<StyledTextProps>

export const Text = ({
  children,
  uppercase,
  className,
  bold,
  capitalize,
  size,
  inline,
  color = 'text',
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      as={variant}
      className={className}
      variant={variant}
      bold={bold}
      color={color}
      uppercase={uppercase}
      capitalize={capitalize}
      size={size}
      inline={inline}
    >
      {children}
    </StyledText>
  )
}
