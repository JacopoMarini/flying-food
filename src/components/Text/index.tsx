import { ReactNode } from 'react'
import { ThemeColor, ThemeSizes } from '../../style/theme'
import { StyledText } from './styled'

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type Props = {
  children: ReactNode
  color?: ThemeColor
  variant?: TextVariant
  size?: ThemeSizes
}

export const Text = ({ children, color = 'text', variant = 'p', size = 'md' }: Props) => {
  return (
    <StyledText as={variant} textColor={color} textSize={size}>
      {children}
    </StyledText>
  )
}
