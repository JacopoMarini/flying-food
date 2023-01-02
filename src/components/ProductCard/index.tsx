import { IconButton } from '../Button'
import { ProductDescription } from '../ProductDescription'
import { ProductThumb } from '../ProductThumb'
import { StyledCard, StyledShopButton, StyledTextWrapper } from './styled'

type Props = {
  productSrc: string
  title: string
  name: string
  avaible: string
  stars: number
  price: string
}

export const ProductCard = ({
  productSrc,
  title,
  name,
  avaible,
  stars,
  price
}: Props) => {
  return (
    <StyledCard>
      <ProductThumb src={productSrc} title={title} />
      <StyledTextWrapper>
        <ProductDescription
          productName={name}
          avaible={avaible}
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
