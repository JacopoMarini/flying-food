import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export type StyledBaseButtonProps = {
  bgColor: ThemeColor
  color: ThemeColor
  radius?: number | string
  size: Size
  className?: string
  outlined?: boolean
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  background-color: ${({ theme, bgColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[bgColor]};
  color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme, radius }) =>
    typeof radius === 'number' ? `${theme.radii[radius]}px` : radius}px;
  padding-inline: ${({ theme, size }) => theme.sizes[size] * 2}px;
  padding-block: ${({ theme, size }) => theme.sizes[size] / 2}px;
  border: ${({ outlined, bgColor }) => (outlined ? `1px solid ${bgColor}` : 'none')};
  cursor: pointer;
`
