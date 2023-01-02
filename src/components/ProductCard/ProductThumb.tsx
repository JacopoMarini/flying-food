import { Image } from '../Image'
import { StyledProductThumb, StyledTag } from './styled'

type Props = {
  src: string
  alt: string

  isNew?: boolean
}

export const ProductThumb = ({ src, alt }: Props) => {
  return (
    <StyledProductThumb>
      <StyledTag title="NEW" bgColor="secondary" color="textInverse" size="sm" />
      <Image src={src} alt={alt} />
    </StyledProductThumb>
  )
}
