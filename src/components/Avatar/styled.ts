import styled from '@emotion/styled'
import { center } from '../../style/utils'

export const StyledAvatar = styled.div<{
  circle?: boolean
  size: number
}>`
  border-radius: ${({ circle }) => (circle ? '50%' : 'none')};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: grey;
  overflow: hidden;
  ${center}
`
