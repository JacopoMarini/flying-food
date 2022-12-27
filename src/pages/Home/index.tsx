import { Avatar } from '../../components/Avatar'
import { Icon } from '../../components/Icon'
import { MenuItem } from '../../components/MenuItem'
import { Paper } from '../../components/Paper'
import { Rating } from '../../components/Rating'
import { Searchbar } from '../../components/Searchbar'
import { SectionTitle } from '../../components/SectionTitle'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'

export const Home = () => {
  return (
    <div>
      <Text variant="h2" color="primary" size="lg" uppercase bold>
        Text Component
      </Text>

      <Paper>
        <div>Paper Component</div>
      </Paper>

      <Icon name="star" color="primary" />

      <Tag bgColor="secondary" title="NEW" color="text" size="lg" />
      <Tag bgColor="primary" title="new" color="textInverse" size="lg" />

      <Rating />

      <Avatar
        username="Jacopo Marini"
        imgSrc="https://www.w3schools.com/howto/img_avatar.png"
        circle
      >
        {' '}
        test
      </Avatar>

      <Searchbar />
      <MenuItem title="lista" linkUrl="#" icon="star" />
      <SectionTitle text="our" secondary="products" />
    </div>
  )
}
