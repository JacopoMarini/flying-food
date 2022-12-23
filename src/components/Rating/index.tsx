import { Icon } from '../Icon'
import { StyledRating } from './styled'

type Props = {
  flex?: boolean
}

export const Rating = ({ flex = true }: Props) => {
  return (
    <StyledRating flex>
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
    </StyledRating>
  )
}
