import { Icon } from '../Icon'
import { Text } from '../Text'
import { StyledMenuItem } from './styled'

type Props = {
  text: string
  second?: string
}

export const MenuItem = ({ text, second }: Props) => {
  return (
    <StyledMenuItem>
      <Icon name="star" color="textInverse" />
      <Text>{text}</Text>
    </StyledMenuItem>
  )
}
