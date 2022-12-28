import styled from '@emotion/styled'
import { ThemeColor, FontSize } from '../../style/theme'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export const StyledText = styled.p<{
  textColor: ThemeColor
  variant: TextVariant
  textSize?: FontSize
  bold?: boolean
  uppercase?: boolean
  className?: string
  capitalize?: boolean
}>`
  color: ${({ theme, textColor }) => textColor && theme.colors[textColor]};
  font-size: ${({ theme, textSize, variant }) => {
    const variantFontSize = theme.textVariants[variant].fontSize
    if (variantFontSize === 'inherit') return
    const size = textSize || variantFontSize || 'md'
    return theme.fontSizes[size] + 'rem'
  }};
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  text-transform: ${({ capitalize }) => capitalize && 'capitalize'};
  display: inline-block;
`
