import { StyledAvatar } from './styled'

type Props = {
  srcUrl?: string
  className?: string
  alt?: string
  circle?: boolean
}

const name = 'Jacopo'
const surname = 'Marini'
const splittedName = name.split('')
const splittedSurname= surname.split('')

function getFirstLetter(params:type) {
  
}


export const Avatar = ({ srcUrl, alt }: Props) => {
  return (
    <StyledAvatar>
      <img src={srcUrl} alt={firstLetter + } />
    </StyledAvatar>
  )
}
