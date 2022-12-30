import styled from '@emotion/styled'
import { theme, ThemeColor } from '../../style/theme'

export const StyledInput = styled.input<{
  outlined?: ThemeColor
  border?: ThemeColor
}>`
  width: 100%;
  border-radius: 20px;
  outline: ${({ outlined }) => (outlined ? theme.colors[outlined] : 'none')};
  border: ${({ border }) => (border ? `1px solid ${theme.colors[border]}` : 'none')};
  padding: 10px;
`
export const PosRelative = styled.div`
  position: relative;
  width: 300px;
`

export const PosAbsolute = styled.div`
  position: absolute;
  top: 2.5px;
  right: 4px;
`
