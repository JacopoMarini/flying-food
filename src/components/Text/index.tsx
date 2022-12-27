import { ReactNode } from 'react'
import { FontSize, ThemeColor } from '../../style/theme'
import { StyledText, TextVariant } from './styled'

type Props = {
  children: ReactNode
  color?: ThemeColor
  variant?: TextVariant
  bold?: boolean
  uppercase?: boolean
  size?: FontSize
  className?: string
  capitalize?: boolean
}

export const Text = ({
  children,
  uppercase,
  className,
  bold,
  capitalize,
  size,
  color = 'text',
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      as={variant}
      className={className}
      variant={variant}
      bold={bold}
      textColor={color}
      uppercase={uppercase}
      capitalize={capitalize}
      textSize={size}
    >
      {children}
    </StyledText>
  )
}
