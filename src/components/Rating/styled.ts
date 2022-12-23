import styled from '@emotion/styled'

export const StyledRating = styled.div<{
  flex: boolean
}>`
  display: ${({ flex }) => (flex ? 'flex' : 'none')};
`
