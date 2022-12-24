import { ReactNode } from 'react'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAvatar } from './styled'

type Props = {
  className?: string
  circle?: boolean
  size?: number
  username?: string
  children: ReactNode
}

export const Avatar = ({ username, size = 48, circle = true, children }: Props) => {
  const getInitials = () => {
    if (!username) return
    const initials = username.split(' ')
    const first = initials.at(0)?.charAt(0) || ''
    const last = initials.at(-1)?.charAt(0) || ''
    return `${first}${last}`
  }

  return (
    <StyledAvatar circle={circle} size={size}>
      <Image imgUrl={'immagine'} />
      <Text>{getInitials()}</Text>
    </StyledAvatar>
  )
}
