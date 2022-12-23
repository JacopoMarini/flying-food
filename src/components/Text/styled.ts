import styled from '@emotion/styled'
import { ThemeColor, FontSize } from '../../style/theme'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

const sizeMap: Partial<Record<TextVariant, FontSize>> = {
  h1: 'xl',
  h2: 'lg'
}
export const StyledText = styled.p<{
  textColor: ThemeColor
  variant: TextVariant
  textSize?: FontSize
  bold?: boolean
  uppercase?: boolean
  className?: string
}>`
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-size: ${({ theme, textSize, variant }) => {
    const size = textSize || sizeMap[variant] || 'md'
    return theme.fontSizes[size]
  }}rem;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
`
