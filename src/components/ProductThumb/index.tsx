import { Image } from '../Image'
import { StyledProductThumb, StyledTag } from './styled'

type Props = {
  src: string
  title?: string
}

export const ProductThumb = ({ src, title }: Props) => {
  return (
    <StyledProductThumb>
      <StyledTag title={title} bgColor="secondary" color="textInverse" />
      <Image src={src} />
    </StyledProductThumb>
  )
}
