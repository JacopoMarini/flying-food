import React from 'react'
import { Rating } from '../Rating'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  productName: string
  available: boolean
  stars: number
  price: string
  title?: string
}

export const ProductDescription = ({ productName, available, stars, price }: Props) => {
  return (
    <Stack direction="vertical" gap={14}>
      <Text capitalize bold size="lg">
        {productName}
      </Text>
      <Text uppercase bold color="lightGrey" size="sm">
        Available
      </Text>
      <Rating value={stars} />
      <Text size="lg" bold>
        $ {price}
      </Text>
    </Stack>
  )
}
