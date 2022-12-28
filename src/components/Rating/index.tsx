import { Icon } from '../Icon'
import { StyledRating } from './styled'

type Props = {
  value: number
}

export const Rating = ({ value }: Props) => {
  return (
    <StyledRating>
      <Icon name="starFull" />
      <Icon name="starFull" />
      <Icon name="starFull" />
      <Icon name="starEmpty" />
      <Icon name="starEmpty" />
    </StyledRating>
  )
}
