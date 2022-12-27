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
  imgSrc?: string
}

const getInitials = (username: string) => {
  const initials = username.split(' ')
  const first = initials.at(0)?.charAt(0) || ''
  const last = initials.at(-1)?.charAt(0) || ''
  return `${first}${last}`
}
export const Avatar = ({ username, size = 48, circle = true, imgSrc }: Props) => {
  const renderContent = () => {
    if (imgSrc) return <Image width="100%" height="100%" fit="cover" src={imgSrc} />
    if (username) return <Text color="textInverse">{getInitials(username)}</Text>
    return null
  }

  return (
    <StyledAvatar circle={circle} size={size}>
      {renderContent()}
    </StyledAvatar>
  )
}
