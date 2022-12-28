import { ReactNode } from 'react'
import { BaseButton } from './BaseButton'

type Props = {
  children: ReactNode
}
export const Button = ({ children }: Props) => {
  return <BaseButton>{children}</BaseButton>
}
