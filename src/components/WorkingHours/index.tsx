import { Icon } from '../Icon'
import { Stack } from '../Stack'
import { Text } from '../Text'

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
    <Stack direction="horizontal" gap={16}>
      <Icon name="clock" color={icon} size="2x" />
      <div>
        <Text variant="p" color={text} uppercase size="sm">
          working hours
        </Text>
        <Text variant="p" color={text} size="sm">
          {opening} {closing}
        </Text>
      </div>
    </Stack>
  )
}
