import { IconButton } from '../Button'
import { ProductDescription } from './ProductDescription'
import { ProductThumb } from './ProductThumb'
import { StyledCard, StyledShopButton, StyledTextWrapper } from './styled'

type Props = {
  id?: string
  imgSrc: string
  name: string
  isAvailable?: boolean
  rating: number
  price: string
  onClick?: (id: string) => void
}

export const ProductCard = ({ imgSrc, name, rating, price, onClick }: Props) => {
  return (
    <StyledCard>
      <ProductThumb src={imgSrc} isNew alt={name} />
      <StyledTextWrapper>
        <ProductDescription productName={name} stars={rating} price={price} isAvailable />
      </StyledTextWrapper>
      <StyledShopButton>
        <IconButton icon="shopBag" size="lg" color="textInverse" />
      </StyledShopButton>
    </StyledCard>
  )
}
