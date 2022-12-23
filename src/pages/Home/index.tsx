import { Avatar } from '../../components/Avatar'
import { Icon } from '../../components/Icon'
import { Paper } from '../../components/Paper'
import { Rating } from '../../components/Rating'
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

      <Tag bgColor="text" text="new" />

      <Rating />

      <Avatar />
    </div>
  )
}
