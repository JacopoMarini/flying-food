import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
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

export const iconMap = {
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
  search: faMagnifyingGlass,
  twitter: faTwitter,
  facebook: faFacebook,
  google: faGooglePlus,
  instagram: faInstagram,
  linkedin: faLinkedin
}

export type IconName = keyof typeof iconMap
