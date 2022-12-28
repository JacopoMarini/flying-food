import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { StyledSocial } from './styled'

const config = [
  {
    name: 'twitter',
    url: '#'
  },
  {
    name: 'facebook',
    url: '#'
  },
  {
    name: 'google',
    url: '#'
  },
  {
    name: 'instagram',
    url: '#'
  },
  {
    name: 'linkedin',
    url: '#'
  }
] as const

type Props = {
  color?: ThemeColor
}

export const Social = ({ color = 'lightGrey' }: Props) => {
  return (
    <StyledSocial>
      {config.map(({ name }) => (
        <Icon key={name} name={name} color={color} />
      ))}
    </StyledSocial>
  )
}
