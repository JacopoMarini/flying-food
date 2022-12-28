import { Icon } from '../Icon'
import { Text } from '../Text'
import { StyledWorkingHours } from './styled'

const variantColors = {
  light: {
    text: 'textInverse',
    icon: 'lightGrey'
  },
  dark: {
    text: 'text',
    icon: 'text'
  }
} as const

type Props = {
  variant: 'light' | 'dark'
  opening: string
  closing: string
}

export const WorkingHours = ({ variant, opening, closing }: Props) => {
  const { text, icon } = variantColors[variant]

  return (
    <StyledWorkingHours>
      <Icon name="clock" color={icon} size="lg" />
      <Text variant="p" color={text} uppercase size="sm">
        working hours
      </Text>
      <Text variant="p">
        {opening} {closing}
      </Text>
    </StyledWorkingHours>
  )
}
