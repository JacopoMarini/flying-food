import { NavLink } from 'react-router-dom'
import { ThemeColor } from '../../style/theme'
import { Icon, IconName } from '../Icon'
import { Text } from '../Text'
import { StyledMenuItem } from './styled'

type Props = {
  title: string
  icon?: IconName
  linkUrl: string
  color?: ThemeColor
}

export const MenuItem = ({ title, icon, linkUrl, color = 'text' }: Props) => {
  return (
    <NavLink to={linkUrl}>
      <StyledMenuItem>
        {icon && <Icon name={icon} color={color} />}
        <Text color={color} size="sm" uppercase>
          {title}
        </Text>
      </StyledMenuItem>
    </NavLink>
  )
}
