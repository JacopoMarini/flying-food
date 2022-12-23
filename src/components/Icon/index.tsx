import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeColor } from '../../style/theme'

const iconMap: Record<string, IconDefinition> = {
  star: faStar
}

type Props = {
  name: IconName
  bgColor?: ThemeColor
  border?: boolean
}
export const Icon = ({ name, bgColor = 'text', border = true }: Props) => {
  return <FontAwesomeIcon color={bgColor} icon={iconMap[name]} />
}
