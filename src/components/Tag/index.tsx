import { ReactNode } from 'react'
import { ThemeColor } from '../../style/theme'

type Props = {
  border?: boolean
  padding?: boolean
  bgColor?: ThemeColor
  children: ReactNode
}
export const Tag = ({
  border = true,
  padding = true,
  bgColor = 'primary',
  children
}: Props) => {
  return <div />
}
