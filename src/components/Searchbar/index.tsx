import { ThemeColor } from '../../style/theme'
import { IconButton } from '../Button'
import { IconName } from '../Icon/config'
import { PosAbsolute, PosRelative, StyledInput } from './styled'

type Props = {
  icon: IconName
  outlined?: ThemeColor
  border?: ThemeColor
}

export const Searchbar = ({ icon, outlined, border = 'lightGrey' }: Props) => {
  return (
    <PosRelative>
      <StyledInput placeholder="search" outlined={outlined} border={border} />
      <PosAbsolute>{icon && <IconButton icon={icon} />}</PosAbsolute>
    </PosRelative>
  )
}
