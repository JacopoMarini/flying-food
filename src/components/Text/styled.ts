import styled from '@emotion/styled'
import { ThemeColor, FontSize } from '../../style/theme'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type StyledTextProps = {
  color: ThemeColor
  variant: TextVariant
  size?: FontSize
  bold?: boolean
  uppercase?: boolean
  capitalize?: boolean
  inline?: boolean
}

export const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-size: ${({ theme, size, variant }) => {
    if (size) return theme.fontSizes[size]
    const variantFontSize = theme.textVariants[variant].fontSize
    if (variantFontSize === 'inherit') return
    const fontSize = size || variantFontSize
    return theme.fontSizes[fontSize] + 'rem'
  }};
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  text-transform: ${({ capitalize }) => capitalize && 'capitalize'};
  display: ${({ inline }) => inline && 'inline-block'};
`
