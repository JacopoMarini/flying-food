import React from 'react'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledStackH, StyledStackV } from './styled'

type Props = {
  title: string
  opening: string
  closing: string
}

export const WorkingHours = ({ title, opening, closing }: Props) => {
  return (
    <StyledStackH>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8OdM5dZQyk0J2GTSTj7wkINQJNkp20m8iQ&usqp=CAU" />
      <StyledStackV>
        <Text variant="h2" uppercase>
          {title}
        </Text>
        <Text variant="p">
          <Text variant="span">{opening}</Text>
          <Text variant="span">{closing}</Text>
        </Text>
      </StyledStackV>
    </StyledStackH>
  )
}
