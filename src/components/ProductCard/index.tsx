import { IconButton } from '../Button'
import { ProductDescription } from './ProductDescription'
import { ProductThumb } from './ProductThumb'
import { StyledCard, StyledShopButton, StyledTextWrapper } from './styled'

type Props = {
  productSrc: string
  title: string
  name: string
  available: boolean
  stars: number
  price: string
}

export const ProductCard = ({
  productSrc,
  title,
  name,
  available,
  stars,
  price
}: Props) => {
  return (
    <StyledCard>
      <ProductThumb src={productSrc} isNew alt={title} />
      <StyledTextWrapper>
        <ProductDescription
          productName={name}
          available={available}
          stars={stars}
          price={price}
        />
      </StyledTextWrapper>
      <StyledShopButton>
        <IconButton icon="shopBag" size="lg" color="textInverse" />
      </StyledShopButton>
    </StyledCard>
  )
}
