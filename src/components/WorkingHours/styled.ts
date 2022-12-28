import styled from '@emotion/styled'

export const StyledStackH = styled.div`
  display: flex;
  height: 44px;
  justify-content: flex-start;
`

export const StyledStackV = styled.div`
  display: flex;
  flex-direction: column;

  p :last-child {
    padding-left: 12px;
  }
`
