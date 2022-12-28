import { IconName } from '@fortawesome/fontawesome-svg-core'
import { BaseButton } from './BaseButton'

type Props = {
  children: string
  icon?: IconName
}
export const Button = ({ children, icon }: Props) => {
  return <BaseButton>Testo oppure testo più icona</BaseButton>
}
