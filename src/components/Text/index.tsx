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
}

export const Text = ({
  children,
  color = 'text',
  variant = 'p',
  uppercase = false,
  bold = false
}: Props) => {
  return (
    <StyledText
      as={variant}
      variant={variant}
      bold={bold}
      textColor={color}
      uppercase={uppercase}
    >
      {children}
    </StyledText>
  )
}
