import { Icon } from '../Icon'
import { StyledInput } from './styled'

export const Searchbar = () => {
  return (
    <div>
      <StyledInput placeholder="search" />
      <Icon name="search" color="text" />
    </div>
  )
}
