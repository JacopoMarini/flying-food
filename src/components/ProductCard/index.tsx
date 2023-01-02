import { Paper } from '../Paper'
import { ProductThumb } from '../ProductThumb'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { StyledPaper } from './styled'

type Props = {
  productSrc: string
  productName: string
  avaible: string
  stars: number
  price: string
  title?: string
}

export const ProductCard = ({
  productSrc,
  productName,
  avaible,
  stars,
  price,
  title
}: Props) => {
  return (
    <StyledPaper>
      <Stack direction="vertical" gap={10}>
        <ProductThumb src={productSrc} title={title} />
        <Text capitalize bold>
          {productName}
        </Text>
      </Stack>
    </StyledPaper>
  )
}
