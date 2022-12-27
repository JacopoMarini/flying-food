import { Icon } from '../Icon'
import { Text } from '../Text'
import { StyledSectionTitle } from './styled'

type Props = {
  text: string
}

export const SectionTitle = ({ text }: Props) => {
  return (
    <StyledSectionTitle>
      <Icon name="star" color="textInverse" />
      <Text>{text}</Text>
    </StyledSectionTitle>
  )
}
