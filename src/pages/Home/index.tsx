import { BaseButton } from '../../components/Button/BaseButton'
import { WorkingHours } from '../../components/WorkingHours'

export const Home = () => {
  return (
    <div>
      <WorkingHours variant="dark" opening="8:00" closing="23:00" />
      <BaseButton>ciao</BaseButton>
    </div>
  )
}
