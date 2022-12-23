import styled from '@emotion/styled'

export const StyledAvatar = styled.div<{
  circle?: boolean
}>`
  border-radius: ${({ circle }) => (circle ? '50' : 'none')}%;
  height: ${({ circle }) => (circle ? '38' : 'none')}px;
  width: ${({ circle }) => (circle ? '38' : 'none')}px;
`
