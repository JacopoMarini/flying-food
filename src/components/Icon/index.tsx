import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme, ThemeColor } from '../../style/theme'
import { iconMap, IconName } from './config'

type Props = {
  name: IconName
  color?: ThemeColor
  size?: SizeProp
}

export const Icon = ({ name, color = 'background' }: Props) => {
  return <FontAwesomeIcon color={theme.colors[color]} icon={iconMap[name]} />
}
