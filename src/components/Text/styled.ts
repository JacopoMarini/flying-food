import styled from '@emotion/styled'
import { ThemeColor, ThemeSizes } from '../../style/theme'

export const StyledText = styled.p<{ textColor: ThemeColor; textSize: ThemeSizes }>`
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-size: ${({ theme, textSize }) => theme.fontSizes[textSize]}rem;
`
