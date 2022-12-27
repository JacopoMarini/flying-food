import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export const StyledTag = styled.div<{
  rounded?: boolean
  bgColor: ThemeColor
  size: Size
}>`
  border-radius: ${({ rounded, theme }) => (rounded ? theme.radii.at(2) : 'none')}px;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  padding-inline: ${({ theme, size }) => theme.sizes[size]}px;
  padding-block: ${({ theme, size }) => theme.sizes[size] / 2}px;
`
