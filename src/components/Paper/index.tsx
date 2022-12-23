import { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'
import { StyledPaper } from './styled'

type Props = {
  bgColor?: ThemeColor
  rounded?: boolean
  children: ReactNode
  shadow?: boolean
  className?: string
}

export const Paper = ({
  children,
  bgColor = 'background',
  rounded = true,
  shadow = true,
  className
}: Props) => {
  return (
    <StyledPaper
      className={className}
      rounded={rounded}
      bgColor={bgColor}
      shadow={shadow}
    >
      {children}
    </StyledPaper>
  )
}
