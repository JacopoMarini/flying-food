import { ObjectFit, StyledImage } from './styled'

type Props = {
  src?: string
  alt?: string
  fit?: ObjectFit
  width?: number | string
  height?: number | string
}
export const Image = (Props: Props) => {
  return <StyledImage {...Props} />
}
