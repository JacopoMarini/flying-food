import { Icon } from '../../components/Icon'
import { WorkingHours } from '../../components/WorkingHours'

export const Home = () => {
  return (
    <div>
      <WorkingHours title="working hours" opening="8:00" closing="23:00" />
    </div>
  )
}
