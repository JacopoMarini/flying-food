import { BaseButton } from './BaseButton'
import { StyledBaseButtonProps } from './styled'

type Props = {} & Partial<StyledBaseButtonProps>

export const IconButton = () => {
  return <BaseButton>Icon</BaseButton>
}
