import { Text } from '../Text'
import { StyledSectionTitle } from './styled'

type Props = {
  text: string
  secondary?: string
}

export const SectionTitle = ({ text, secondary }: Props) => {
  return (
    <StyledSectionTitle>
      <Text variant="h2" capitalize>
        <Text variant="span" bold inline>
          {text}
        </Text>
        <Text variant="span" inline>
          {secondary}
        </Text>
      </Text>
    </StyledSectionTitle>
  )
}
