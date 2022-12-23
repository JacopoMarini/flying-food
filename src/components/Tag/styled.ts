import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledTag = styled.div<{
  rounded?: boolean
  bgColor: ThemeColor
}>`
  border-radius: ${({ rounded, theme }) => (rounded ? theme.radii.at(2) : 'none')}px;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  padding-inline: 0.8rem;
  padding-block: 0.2rem;
`
