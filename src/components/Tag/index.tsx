import { ThemeColor } from '../../style/theme'
import { Text } from '../Text'
import { StyledTag } from './styled'

type Props = {
  bgColor: ThemeColor
  text: string
  color?: ThemeColor
  className?: string
}
export const Tag = ({ text, bgColor, className, color }: Props) => {
  return (
    <StyledTag className={className} rounded bgColor={bgColor}>
      <Text bold uppercase color={color}>
        {text}
      </Text>
    </StyledTag>
  )
}
