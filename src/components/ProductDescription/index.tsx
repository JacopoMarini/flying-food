import React from 'react'
import { Rating } from '../Rating'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  productName: string
  avaible: string
  stars: number
  price: string
  title?: string
}

export const ProductDescription = ({ productName, avaible, stars, price }: Props) => {
  return (
    <Stack direction="vertical" gap={10}>
      <Text capitalize bold size="lg">
        {productName}
      </Text>
      <Text uppercase color="lightGrey" size="sm">
        {avaible}
      </Text>
      <Rating value={stars} />
      <Text bold>{`$ ${price}`}</Text>
    </Stack>
  )
}
