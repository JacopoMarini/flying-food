import styled from '@emotion/styled'

export const StyledText = styled.p<{ fontColor: string }>`
  font-size: 20px;
  text-transform: uppercase;
  color: ${(props) => props.fontColor};
`
