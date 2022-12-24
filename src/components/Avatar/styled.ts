import styled from '@emotion/styled'

export const StyledAvatar = styled.div<{
  circle?: boolean
  size: number
}>`
  border-radius: ${({ circle }) => (circle ? '50%' : 'none')};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: bisque;
  display: flex;
  justify-content: center;
  align-items: center;
`
