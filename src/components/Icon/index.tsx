import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import {
  faBagShopping,
  faBowlFood,
  faBowlRice,
  faBurger,
  faCake,
  faCakeCandles,
  faCarrot,
  faGift,
  faIceCream,
  faLemon,
  faLocationDot,
  faMagnifyingGlass,
  faMartiniGlassCitrus,
  faMedal,
  faMugHot,
  faPizzaSlice,
  faStar,
  faTruck,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme, ThemeColor } from '../../style/theme'

const iconMap = {
  star: faStar,
  shopBag: faBagShopping,
  burger: faBurger,
  pizza: faPizzaSlice,
  sushi: faBowlFood,
  cake: faCakeCandles,
  cocktail: faMartiniGlassCitrus,
  soup: faMugHot,
  cheesecake: faCake,
  iceCream: faIceCream,
  salad: faBowlRice,
  vegetables: faCarrot,
  fruit: faLemon,
  personal: faUser,
  map: faLocationDot,
  delivery: faTruck,
  reward: faMedal,
  bonus: faGift,
  search: faMagnifyingGlass
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
