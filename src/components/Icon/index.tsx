import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faBagShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme, ThemeColor } from '../../style/theme'

const iconMap = {
  star: faStar,
  shopBag: faBagShopping
}

type IconName = keyof typeof iconMap

type Props = {
  name: IconName
  color?: ThemeColor
  size?: SizeProp
}

export const Icon = ({ name, color = 'primary' }: Props) => {
  return <FontAwesomeIcon color={theme.colors[color]} icon={iconMap[name]} />
}
