import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledPaper = styled.div<{
  bgColor: ThemeColor
  rounded?: boolean
  shadow?: boolean
}>`
  border-radius: ${({ rounded, theme }) => (rounded ? theme.radii.at(1) : 'none')};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  box-shadow: ${({ shadow }) => (shadow ? '0 8px 40px rgba(0,0,0,0.2)' : 'none')};
`
