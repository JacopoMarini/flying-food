import { Paper } from '../../components/Paper'
import { Text } from '../../components/Text'

export const Home = () => {
  return (
    <div>
      <Text variant="h2" color="text" size="lg" uppercase bold>
        Text Component
      </Text>

      <Paper>
        <div>Paper Component</div>
      </Paper>
    </div>
  )
}
