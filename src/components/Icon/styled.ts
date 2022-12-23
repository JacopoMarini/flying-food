import styled from '@emotion/styled'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { ThemeColor } from '../../style/theme'

export const StyledIcon = styled.div<{
  name: IconName
  bgColor: ThemeColor
  border: boolean
}>`
  border: ${({ border, bgColor }) => (border ? '1px solid' + bgColor : 'none')};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
`
