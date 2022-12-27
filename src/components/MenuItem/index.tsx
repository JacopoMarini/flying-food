import { Text } from '../Text'
import { StyledMenuItem } from './styled'

type Props = {
  text: string
  second?: string
}

export const MenuItem = ({ text, second }: Props) => {
  return (
    <StyledMenuItem>
      <Text variant="h2" color="text" bold>
        {text}
      </Text>
      <Text variant="h2" color="text">
        {second}
      </Text>
    </StyledMenuItem>
  )
}
