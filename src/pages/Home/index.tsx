import { Rating } from '../../components/Rating'
import { Searchbar } from '../../components/Searchbar'

export const Home = () => {
  return (
    <div>
      <Rating value={3.5} />
      <Searchbar icon="search" />
    </div>
  )
}
