import { Size, ThemeColor } from '../../style/theme'
import { Text } from '../Text'
import { StyledTag } from './styled'

type Props = {
  bgColor: ThemeColor
  title: string
  color?: ThemeColor
  className?: string
  size?: Size
}
export const Tag = ({ title, bgColor, className, color, size = 'md' }: Props) => {
  return (
    <StyledTag className={className} rounded bgColor={bgColor} size={size}>
      <Text bold color={color} size={size}>
        {title}
      </Text>
    </StyledTag>
  )
}
