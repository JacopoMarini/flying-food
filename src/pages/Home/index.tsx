import { Social } from '../../components/Social'
import { WorkingHours } from '../../components/WorkingHours'

export const Home = () => {
  return (
    <div>
      <WorkingHours variant="light" opening="8:00" closing="23:00" />
    </div>
  )
}
